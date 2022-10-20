import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/appStyles';
import { calcHeight, calcWidth } from '../../config/metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    emptyText: {
        fontFamily: fonts.Medium,
        marginTop: calcHeight(50),
        alignSelf: 'center',
        width: calcWidth(315),
        textAlign: 'center',
        fontSize: calcWidth(18),
        color: colors.grey
    },
    locationStyle: {
        width: calcWidth(30),
        height: calcWidth(30)
    },
    infoStyle: {
        width: calcWidth(30),
        height: calcWidth(30)
    },
    citiesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: calcWidth(16),
        paddingVertical: calcHeight(16),
        zIndex: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cityText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(18),
        color: colors.grey,
        marginLeft: calcWidth(32),
    },
    list: {
        paddingBottom: calcHeight(90)
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;
