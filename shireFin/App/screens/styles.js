import { StyleSheet } from "react-native";

import { Colors, fontSizes, Spaces } from "../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: Spaces.default
    },

    centeredContainer: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        padding: Spaces.default
    },

    startContainer: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "flex-start",
        padding: Spaces.default
    },

    walletContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginVertical: Spaces.large,
        padding: Spaces.medium
    },

    userAuth: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: Spaces.medium
    },

    blackText: {
        fontSize: fontSizes.default,
        color: Colors.dark
    },

    centeredContainer: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        padding: Spaces.default
    },

    startContainer: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "flex-start",
        padding: Spaces.default
    },

    screenColor: {
        backgroundColor: "aliceblue"
    },

    successIcon: {
        marginLeft: Spaces.large * 5,
        alignSelf: "center"
    },

    quickTransact: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        marginVertical: Spaces.medium,
        backgroundColor: Colors.lightSecondary,
        padding: Spaces.medium,
        width: Spaces.large * 14,
        borderRadius: Spaces.default
    },

    smallTitle: {
        fontSize: fontSizes.default,
        color: Colors.secondary,
        textAlign: "center"
    },

    allTransactions: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignSelf: "center",
        marginVertical: Spaces.small / 4,
        backgroundColor: Colors.lightSecondary,
        padding: Spaces.medium,
        width: Spaces.large * 14,
        borderRadius: Spaces.default
    },

    row: {
        flex: 1,
        flexDirection: "row",
        padding: Spaces.small / 0.8,
        justifyContent: "space-between", 
        marginVertical: Spaces.small / 1.5
    },

    halfRow: {
        flexDirection: "row",
        paddingLeft: Spaces.large
    },

    tightRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly", 
        marginVertical: Spaces.small / 1.5,
        marginHorizontal: Spaces.medium * 0.8,
    },

    transactionRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: Spaces.small / 0.8,
        marginVertical: Spaces.small / 6.5
    },

    innerColumn: {
        alignItems: "center",
        justifyContent: "center",
    },

    middleColumn: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft: Spaces.medium * 1.25
    },

    doubleView: {
        flexDirection: "row",
        alignSelf: "flex-start",
        justifyContent: "flex-start"
    },

    withdrawalHistory: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "center",
        marginVertical: Spaces.small / 2.5,
        borderColor: Colors.lightGray,
        borderRadius: Spaces.small / 1.5,
        borderWidth: Spaces.small / 15,
        padding: Spaces.small,
        width: "90%"
    },

    features: {
        flex: 1,
        flexDirection: "column",
        padding: Spaces.small,
        marginVertical: Spaces.large
    },

    accountInfo: {
        flex: 1,
        flexDirection: "column",
        padding: Spaces.small / 2,
        borderWidth: Spaces.small * 0.025,
        borderColor: Colors.lightGray,
        borderRadius: Spaces.small,
        margin: Spaces.medium / 2
    },

    editAccount: {
        flexDirection: "column",
        padding: Spaces.small / 2,
        margin: Spaces.medium / 16,
        marginTop: -Spaces.small * 0.5
    },

    iconView: {
        width: Spaces.large * 2,
        height: Spaces.large * 2,
        backgroundColor: "#fff",
        borderRadius: Spaces.small / 2,
        alignItems: "center",
        justifyContent: "center",
        marginRight: Spaces.medium / 1.5
    },

    transaction: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: Spaces.small,
        borderRadius: Spaces.small / 2
    }
})

export default styles;
