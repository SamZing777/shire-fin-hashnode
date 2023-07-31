import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CreateProfileScreen from './partials/createProfileScreen';
import { AppBar, ScreenAppBar } from '../../components/appBar';
import { SignOutButton } from '../../components/buttons';
import styles from '../styles';

const CreateProfile = () =>{
    const navigation = useNavigation();
    
    const homeScreen = () =>{
        navigation.navigate("Home Screen");
    }

    return(
        <ScrollView>
            <ScreenAppBar text="Profile" />
            <View style={styles.container}>
                <CreateProfileScreen />
                <SignOutButton />
            </View>
        </ScrollView> 
    )
}

export default CreateProfile;
