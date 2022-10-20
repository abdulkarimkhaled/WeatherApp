import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { icons } from '../../icons/pngs';
import { convertToCel, upperFirstLetters } from '../../config/appValidations'

// declaring props types  
interface propsType {
    city: {
        weather: Array<{ description: string }>,
        main: {
            temp: number,
            humidity: number
        },
        wind: {
            speed: number
        },
        name: string,
        sys: {
            country: string
        }
    },
    icon: string,
}

interface paramsType {
    params: propsType;
}

interface routeType {
    route: paramsType;
}
function CityDetails(props: routeType) {

    const [city] = useState(props?.route?.params?.city)
    const [icon] = useState(props?.route?.params?.icon)
    const details = [
        {
            tile: 'Description',
            description: upperFirstLetters(city?.weather[0]?.description)
        },
        {
            tile: 'Temperature',
            description: convertToCel(city.main.temp) + String.fromCharCode(176) + ' C'
        },
        {
            tile: 'Humidity',
            description: city.main.humidity + '%'
        },
        {
            tile: 'Windspeed',
            description: city.wind.speed + ' km/h'
        }
    ]

    return (
        <View style={styles.container}>
            <Header back={icons.ArrowBack} />
            <View style={styles.cityContainer} >
                <Text style={styles.headerText} >
                    {city.name}, {city.sys.country}
                </Text>
                <Image style={styles.weatherIcon} source={{ uri: icon }} />
                <View style={styles.details} >
                    {details.map((item) => {
                        return (
                            <View style={styles.detailsContainer} >
                                <Text style={styles.titleText} >{item.tile}</Text>
                                <Text style={styles.descText}>{item.description}</Text>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    );
}

export { CityDetails };
