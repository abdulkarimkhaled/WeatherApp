import { Platform, StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainColor,
        paddingVertical: calcHeight(18),
        paddingHorizontal: calcWidth(20),
        position: 'absolute',
        bottom: calcHeight(16),
        right: calcWidth(16),
        borderRadius: calcWidth(40),
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10
    },
    buttonText: {
        fontFamily: fonts.Regular,
        fontSize: calcWidth(24),
        color: colors.white,
        fontWeight: '400',
        marginLeft: calcWidth(16)
    },
})