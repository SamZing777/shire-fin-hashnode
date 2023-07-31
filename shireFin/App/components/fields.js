import React from "react";
import { TextInput } from "react-native";

import { Colors } from "../constants/theme";
import styles from "../screens/styles";

export const Input = ({value, handleInput, type, place}) =>{
    return(
        <TextInput style={styles.input}
            onChangeText={handleInput}
            value={value}
            keyboardType={type}
            placeholder={place}
            placeholderTextColor={Colors.gray}
            color={Colors.gray}
        />
    )
}

export const AmountInput = ({value, handleInput, type, place}) =>{
    return(
        <TextInput style={styles.amount}
            onChangeText={handleInput}
            value={value}
            keyboardType="numeric"
            placeholder={place}
            placeholderTextColor={Colors.gray}
        />
    )
}

export const CodeInput = ({value, handleInput}) =>{
    return(
        <TextInput style={styles.codeInput}
            onChangeText={handleInput}
            value={value}
            keyboardType="numeric"
        />
    )
}

// export const DigitInput = ({value, handleInput, place}) =>{
//     return(
//         <TextInput style={styles.digit}
//             onChangeText={handleInput}
//             value={value}
//             keyboardType="numeric"
//             placeholder={place}
//             placeholderTextColor={Colors.gray}
//         />
//     )
// }

export const SecretInput = ({value, handleInput, place}) =>{
    return(
        <TextInput style={styles.input}
            onChangeText={handleInput}
            value={value}
            secureTextEntry={true}
            placeholder={place}
            placeholderTextColor={Colors.gray}
            color={Colors.gray}
        />
    )
}
