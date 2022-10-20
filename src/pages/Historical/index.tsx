import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useGetWeatherHistoricalQuery } from '../../apis/weatherAPIs';
import { Header } from '../../components/models/Header';
import styles from './styles';
import { icons } from '../../icons/pngs';
import { useNavigation } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { colors } from '../../config/appStyles';
import { calcWidth } from '../../config/metrics';

function Historical(props) {
    const navigation = useNavigation()
    const [city, setCity] = useState(props?.route?.params?.city)
    const { data, refetch } = useGetWeatherHistoricalQuery({
        type: 'hour',
        city: city.name,
        code: city.sys.country
    })

    const tempData = [
        {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        }, {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        }, {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        }, {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        }, {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        }, {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        }, {
            time: '01.10.2019. - 16:58',
            status: 'Cloudy, 14°C',
        },
    ]


    //refetch data everytime we access this screen either going forwards or backwards
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            refetch()
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        if (data) {
        }
    }, [data])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.weatherContainer} >
                <View
                    style={styles.cloudStyle} >
                    <Fontisto color={colors.mainColor} size={calcWidth(24)} name={'day-cloudy'} />
                </View>
                <View >
                    <Text style={styles.timeText} >{item.time}</Text>
                    <Text style={styles.statusText} >{item.status}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header back={icons.ArrowBack} title={city.name + ' ' + 'historical'} />
            <FlatList
                data={tempData}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
                ListEmptyComponent={() => <Text style={styles.emptyText}>{`You haven't added any city yet!\nYou can add a new city buy pressing the add button!`}</Text>}
            />
        </View>
    );
}

export { Historical };
