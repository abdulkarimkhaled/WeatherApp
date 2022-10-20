import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetWeatherCityMutation } from '../../apis/weatherAPIs';
import { AddButton } from '../../components/models/AddButton';
import { Header } from '../../components/models/Header';
import { AddModal } from '../../components/models/SearchModal';
import styles from './styles';
import { useDispatch } from 'react-redux';
import Types from '../../redux/types';
import { icons } from '../../icons/pngs';
import NavigationService from '../../navigation/NavigationService';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { calcWidth } from '../../config/metrics';


function Home() {
    //fetch weather data from reducer
    const weatherData = useSelector((state: { weatherReducer: { cities: Array<object> } }) => state?.weatherReducer)
    const dispatch = useDispatch()
    const [cities, setCities] = useState(weatherData.cities)
    const [modal, setModal] = useState(false)
    //Redux toolKit function and response for api calls
    const [getCity, cityResult] = useGetWeatherCityMutation()


    //setting cities from reducers when data changes
    useEffect(() => {
        if (weatherData.cities) {
            setCities(weatherData.cities)
        }
    }, [weatherData])

    //remove a city from current array then setting the new array in weather reducer
    const removeCity = (city: object) => {
        let index = cities.indexOf(city);
        let tempArr = [...cities]
        tempArr.splice(index, 1)
        dispatch({
            type: Types.DELETE_CITY,
            payload: tempArr
        })
    }

    //render items of cities for Flatlist
    const renderItem = ({ item }) => {
        //parameters to be sent to the next screen 
        let tempParams = {
            city: item,
            icon: `https://openweathermap.org/img/w/${item?.weather[0]?.icon}.png`
        }
        return (
            <View style={styles.citiesContainer} >
                <TouchableOpacity onPress={() => NavigationService.navigate('CityDetails', tempParams)}
                    style={styles.row} >
                    <Image style={styles.locationStyle} source={icons.Location} />
                    <Text style={styles.cityText} >{item.name} ,{item.sys.country}</Text>
                </TouchableOpacity>
                <View style={styles.icons} >
                    <TouchableOpacity onPress={() => removeCity(item)}>
                        <AntDesign name='minuscircle' size={calcWidth(20)} color={'red'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => NavigationService.navigate('Historical', { city: item })}>
                        <Image style={styles.infoStyle} source={icons.Info} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }



    // add city function
    const AddCity = (city: string) => {
        //checking if the city exits in current cities array that the user added to 
        if (cities.find(item => item.name === city)) {
            alert('city already exist')
        } else {
            //calling add city api
            getCity({ city })
        }
    }

    useEffect(() => {
        //if successfully retrieved data then dispatch the save action in weather reducer and send the new data in payload
        if (cityResult.isSuccess) {
            dispatch({
                type: Types.SAVE_CITIES,
                payload: cityResult.data
            })
            setModal(false)
        }
        if (cityResult.isError) {
            alert(cityResult.error.data.message)
        }
        //lister for add city api
    }, [cityResult])


    return (
        <View style={styles.container}>
            <Header title={'Cities'} />
            <FlatList
                data={cities}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                ListEmptyComponent={() => <Text style={styles.emptyText}>{`You haven't added any city yet!\nYou can add a new city buy pressing the add button!`}</Text>}
            />
            {/* Add button component */}
            <AddButton onPress={() => {
                setModal(true)
            }} />
            {/* Add city Modal component */}
            <AddModal onPress={(city: string) => AddCity(city)} setVisible={setModal} visible={modal} />
        </View>
    );
}

export { Home };
