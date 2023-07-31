import React from 'react';
import {
    View,
    ActivityIndicator 
} from "react-native";

import { Colors, fontSizes } from "../constants/theme";

export const Loading = () =>{
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center"
        }}>
            <ActivityIndicator color={Colors.primary} size={fontSizes.large * 2} />
        </View>
    )
}
