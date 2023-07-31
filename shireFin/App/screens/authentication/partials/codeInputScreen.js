import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MediumText, Paragraph } from '../../../components/texts';
import { CodeInput } from '../../../components/fields';
import { DefaultButton, AuthButton } from '../../../components/buttons';
import styles from '../../styles';

export const CodeVerfication = () =>{
    return(
        <View style={styles.container}>
            <MediumText text="Please check your email address" />
            <Paragraph text="We've sent a code to your registered email" />
            <View style={styles.row}>
                <CodeInput value={null} handleInput={null} />
                <CodeInput value={null} handleInput={null} />
                <CodeInput value={null} handleInput={null} />
                <CodeInput value={null} handleInput={null} />
            </View>
            <View style={styles.row}>
                <Paragraph text="Don't get the code?" />
                <AuthButton title={"Click to resend"} handlePress={null} />
            </View>
        </View>
    )
}

export const ButtonOptions = () =>{
    const navigation = useNavigation();

    const homeScreen = () => {
        // Display message before proceeding to Home Screen
        navigation.navigate("Home Screen");
    }

    return(
        <View style={styles.row}>
            <DefaultButton title={"Cancel"} handlePress={null} />
            <handlePress title={"Verify"} handlePress={homeScreen} />
        </View>
    )
}
