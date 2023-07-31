import React from 'react';
import {
    View,
    Pressable
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { BaseIcon } from './icons';
import { SmallTitle } from './texts';

import styles from '../screens/styles';

export const AppBar = ({text}) =>{
    const navigation = useNavigation();

    const setProfile = () =>{
        navigation.navigate("Create Profile Screen");
    }

    const notifications = () =>{
        navigation.navigate("Notifications");
    }

    return(
        <View style={styles.row}>
            <Pressable onPress={setProfile}>
                <BaseIcon icon={"account-circle-outline"} />
            </Pressable>
            <SmallTitle text={text} />
            <Pressable onPress={notifications}>
                <BaseIcon icon={"bell-circle-outline"} />
            </Pressable>
        </View>
    )
}

export const ScreenAppBar = ({text}) =>{
    const navigation = useNavigation();

    const goBack = () =>{
        navigation.pop(1);
    }

    return(
        <View style={styles.row}>
            <Pressable onPress={goBack}>
                <BaseIcon icon={"chevron-left-circle"} />
            </Pressable>
            <SmallTitle text={text} />
        </View>
    )
}
