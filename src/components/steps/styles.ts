import { StyleSheet} from "react-native"
import { colors, fontFamily } from "../../styles/theme"

export const s = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        gap: 16,
        flex: 1
      },
    title: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    }
})