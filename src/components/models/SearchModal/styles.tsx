import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../config/appStyles'
import { calcHeight, calcWidth } from '../../../config/metrics'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: calcWidth(10),
        overflow: 'hidden',
        width: '100%'
    },
    inputContainer: {
        flexDirection: 'row',
        paddingVertical: calcHeight(16),
        paddingHorizontal: calcWidth(20),
        borderBottomWidth: calcWidth(0.3),
        borderBottomColor: colors.lightGrey
    },
    inputStyle: {
        width: '100%',
        borderColor: colors.grey,
        paddingLeft: calcWidth(8)
    },
    addButton: {
        paddingVertical: calcHeight(16),
        backgroundColor: colors.mainColor,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addText: {
        fontFamily: fonts.Bold,
        fontSize: calcWidth(18),
        color: colors.white
    }
})