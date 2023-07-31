import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthText, MediumText } from '../../../components/texts';
import { Input, SecretInput } from '../../../components/fields';
import { AuthButton } from '../../../components/buttons';
import styles from '../../styles';

export const SignUpFields = () =>{
    const navigation = useNavigation();

    const homeScreen = () =>{
       navigation.navigate("Home Screen");
    }

    return(
        <View>
            <View style={styles.startContainer}>
                <MediumText text="Email" />
            </View>
            <View style={styles.editAccount}>
                <Input place="abcd@xyz.com"
                value={null} handleInput={null} />
            </View>

            <View style={styles.startContainer}>
                <MediumText text="Password" />
            </View>
            <View style={styles.editAccount}>
                <SecretInput place="Your password"
                value={null} handleInput={null} />
            </View>

            <AuthButton title={"Sign up"} handlePress={homeScreen} />
        </View>
    )
}

export const ExistingUser = () =>{
    const navigation = useNavigation();

    const loginScreen = () =>{
        navigation.navigate("Login Screen");
    }

    return(
        <View style={styles.userAuth}>
            <MediumText text="Have an account already?" />
            <AuthText title="Login"
            handlePress={loginScreen} />
        </View>
    )
}
