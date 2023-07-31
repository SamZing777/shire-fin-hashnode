import { StyleSheet } from "react-native";

import { 
    Colors, 
    fontSizes, 
    Spaces 
} from "../constants/theme";

const style = StyleSheet.create({
    screenTitle: {
        color: Colors.primary,
        fontWeight: "bold",
        fontSize: fontSizes.medium
    },

    title: {
        fontSize: fontSizes.medium,
        color: Colors.primary,
        fontWeight: "bold"
    },

    blackText: {
        fontSize: fontSizes.default,
        color: Colors.dark
    },

    paragraph: {
        fontSize: fontSizes.default,
        color: Colors.gray
    },

    debitText: {
        fontSize: fontSizes.dark,
        color: Colors.off
    },

    creditText: {
        fontSize: fontSizes.small * 1.5,
        color: Colors.success
    },

    debitText: {
        fontSize: fontSizes.small * 1.25,
        color: Colors.off,
        fontWeight: "bold"
    },

    creditText: {
        fontSize: fontSizes.small * 1.25,
        color: Colors.success,
        fontWeight: "bold"
    },

    focalText: {
        fontSize: fontSizes.large,
        color: Colors.primary,
        fontWeight: "bold",
        marginBottom: Spaces.small,
        paddingHorizontal: Spaces.default
    },

    mediumText: {
        fontSize: fontSizes.medium / 1.25,
        color: Colors.primary,
        fontWeight: "bold"
    },

    saveText: {
        fontSize: fontSizes.medium / 1.25,
        color: Colors.light,
        fontWeight: "bold"
    },

    lightText: {
        color: Colors.light,
        fontSize: fontSizes.small / 1.65,
        textAlign: "center",
        fontWeight: "bold",
        alignSelf: "center"
    },

    mediumLightText: {
        fontSize: fontSizes.medium / 1.25,
        color: Colors.light,
        fontWeight: "bold"
    },

    largeText: {
        fontSize: fontSizes.xLarge,
        color: Colors.primary
    },

    tabIcon: {
        backgroundColor: "#fff",
        borderColor: Colors.gray,
        borderWidth: fontSizes.small / 20,
        borderRadius: fontSizes.large,
        width: fontSizes.large * 2,
        height: fontSizes.large * 2,
        alignItems: "center",
        justifyContent: "center"
    },

    input: {
        height: Spaces.large * 2,
        width: "95%",
        borderRadius: Spaces.small,
        backgroundColor: Colors.lightSecondary,
        paddingLeft: Spaces.medium,
        color: Colors.dark,
        alignSelf: "center"
    },

    codeInput: {
        height: Spaces.large * 6,
        width: Spaces.large,
        borderRadius: Spaces.medium,
    },

    smallButtonText: {
        color: Colors.light,
        alignSelf: "center"
    },

    button: {
        borderRadius: Spaces.small,
        backgroundColor: Colors.light,
        height: Spaces.large * 1.80,
        width: Spaces.large * 6.5,
        padding: Spaces.small / 2.3,
        alignItems: "center",
        justifyContent: "center",
        elevation: Spaces.small / 2
    },

    primaryDefaultButton: {
        borderRadius: Spaces.small,
        backgroundColor: Colors.primary,
        borderWidth: Spaces.small / 12,
        height: Spaces.large * 1.80,
        width: Spaces.large * 6.5,
        padding: Spaces.small / 2.3,
        alignItems: "center",
        justifyContent: "center"
    },

    primaryButton: {
        borderRadius: Spaces.small,
        backgroundColor: Colors.primary,
        borderWidth: Spaces.small / 12,
        height: Spaces.large * 1.8,
        width: Spaces.large * 13,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Spaces.default / 1.25
    },

    authButton: {
        borderRadius: Spaces.small,
        borderColor: Colors.primary,
        borderWidth: Spaces.small / 12,
        height: Spaces.large * 1.8,
        width: Spaces.large * 13,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: Spaces.default / 1.25
    },

    smallButton: {
        backgroundColor: Colors.secondary,
        borderRadius: Spaces.small / 1.25,
        height: Spaces.large,
        width: Spaces.large * 2.5,
        flexDirection: "row",
        justifyContent: "center"
    },

    editButton: {
        backgroundColor: Colors.lightSecondary,
        borderRadius: Spaces.small / 1.25,
        height: Spaces.large * 2,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: Spaces.small
    },

    saveButton: {
        backgroundColor: Colors.primary,
        borderRadius: Spaces.small / 1.25,
        height: Spaces.large * 2,
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: Spaces.small
    },

    iconButton: {
        flexDirection: "row",
        borderRadius: Spaces.small,
        backgroundColor: Colors.light,
        height: Spaces.large * 1.70,
        width: Spaces.large * 6,
        padding: Spaces.small / 2.3,
        alignItems: "center",
        justifyContent: "space-evenly",
        elevation: Spaces.small / 2
    },

    signOutButton: {
        backgroundColor: Colors.off,
        borderRadius: Spaces.small / 1.25,
        height: Spaces.large * 2,
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: Spaces.small
    },

    /* Cards Styling */

    featureCard: {
        flexDirection: "column",
        width: Spaces.large * 4,
        height: Spaces.large * 3.5,
        borderRadius: Spaces.medium,
        alignItems: "center",
        alignContent: "center",
        justifyContent: "space-evenly",
        backgroundColor: Colors.primary,
        marginTop: Spaces.small / 2
    },

    largeCard: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignSelf: "center",
        width: "90%",
        height: Spaces.xLarge,
        borderRadius: Spaces.medium,
        padding: Spaces.medium,
        elevation: Spaces.small / 2
    },

    walletCard: {
        backgroundColor: "#fff",
        width: Spaces.xLarge / 1.1,
        height: Spaces.xLarge / 1.5,
        alignItems: "center",
        borderRadius: Spaces.small,
        padding: Spaces.medium,
        marginVertical: Spaces.small,
        elevation: Spaces.small / 2
    },

    smallRoundedImage: {
        width: Spaces.medium * 1.2,
        height: Spaces.medium * 1.5,
        borderRadius: Spaces.small
    }
})

export default style;
