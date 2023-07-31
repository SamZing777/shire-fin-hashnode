import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { LoginFields, NewUser } from './partials/loginScreen';
import styles from '../styles';

const LoginScreen = () =>{
    const navigation = useNavigation();
    
    const homeScreen = () =>{
        navigation.navigate("Home Screen");
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <LoginFields />
                <NewUser />
            </View>
        </ScrollView> 
    )
}

export default LoginScreen;
