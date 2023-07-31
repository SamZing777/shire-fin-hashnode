import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AuthButton, PrimaryButton } from '../../components/buttons';
import styles from '../styles';

const LoginOrSignupScreen = () =>{
    const navigation = useNavigation();

    const signupScreen = () =>{
        navigation.navigate("Sign up Screen");
    }
    
    const loginScreen = () =>{
        navigation.navigate("Login Screen");
    }

    const createProfileScreen = () =>{
        navigation.navigate("Create Profile Screen")
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <PrimaryButton title={"Sign up"} handlePress={signupScreen} />
                <AuthButton title={"Login"} handlePress={loginScreen} />
                <AuthButton title={"Create Profile"} handlePress={createProfileScreen} />
            </View>
        </ScrollView> 
    )
}

export default LoginOrSignupScreen;
