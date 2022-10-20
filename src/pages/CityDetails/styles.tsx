import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    cityContainer: {
        backgroundColor: colors.white,
        width: calcWidth(296),
        paddingTop: calcHeight(26),
        paddingBottom: calcHeight(30),
        alignSelf: 'center',
        position: 'absolute',
        top: calcHeight(100),
        borderRadius: calcWidth(4),
        shadowColor: "#070530 20%",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20.84,
        elevation: 5,
    },
    headerText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(28),
        color: colors.black,
        alignSelf: 'center',

    },
    weatherIcon: {
        width: calcWidth(90),
        height: calcWidth(90),
        marginTop: calcHeight(68),
        alignSelf: 'center'
    },
    details: {
        marginTop: calcHeight(76)
    },
    detailsContainer: {
        marginHorizontal: calcWidth(32),
        marginBottom: calcHeight(8),
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    titleText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(14),
        color: colors.black,
        fontWeight: '600'
    },
    descText: {
        fontFamily: fonts.Medium,
        fontSize: calcWidth(18),
        color: colors.mainColor,
    }
});

export default styles;
