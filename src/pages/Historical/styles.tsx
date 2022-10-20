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
    cloudStyle: {
        width: calcWidth(36),
        height: calcWidth(36),
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: calcWidth(21)
    },
    weatherContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: calcWidth(21),
        paddingVertical: calcHeight(16),
        zIndex: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(12),
        color: colors.simpleGrey,
    },
    statusText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(14),
        color: colors.black,
        fontWeight: '900'
    },
    list: {
        paddingBottom: calcHeight(90)
    }
});

export default styles;
