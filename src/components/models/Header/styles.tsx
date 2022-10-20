import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        width: "100%",
        minHeight: calcHeight(112),
        paddingTop: calcHeight(35),
        paddingBottom: calcHeight(22),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    backIcon: {
        width: calcWidth(70),
        height: calcWidth(70)
    },
    titleText: {
        fontFamily: fonts.Regular,
        marginLeft: calcWidth(72),
        fontSize: calcWidth(24),
        color: colors.white,
        fontWeight: '400'
    }
})