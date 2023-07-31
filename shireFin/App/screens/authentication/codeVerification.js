import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../styles';

const CodeVerificationScreen = () =>{
    const navigation = useNavigation();
    
    const homeScreen = () =>{
        navigation.navigate("Home Screen");
    }

    return(
        <ScrollView>
            <View style={styles.container}>

            </View>
        </ScrollView> 
    )
}

export default CodeVerificationScreen;
