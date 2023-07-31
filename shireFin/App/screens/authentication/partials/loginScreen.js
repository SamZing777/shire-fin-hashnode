import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {API, graphqlOperation} from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';


import { AuthText, MediumText } from '../../../components/texts';
import { AuthButton } from '../../../components/buttons';
import { Input, SecretInput } from '../../../components/fields';
import styles from '../../styles';

export const LoginFields = () =>{
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
                    <SecretInput place="Password"
                    value={null} handleInput={null} />
                </View>

                <AuthButton title={"Login"} handlePress={homeScreen} />
        </View>
    )
}

export const NewUser = () =>{
    const navigation = useNavigation();

    const signupScreen = () =>{
        navigation.navigate("Sign up Screen");
    }

    return(
        <View style={styles.userAuth}>
            <MediumText text="Don't have an account?" />
            <AuthText title="Sign up" 
            handlePress={signupScreen} />
        </View>
    )
}
