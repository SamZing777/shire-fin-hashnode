import React, {useEffect} from 'react';
import { 
    ScrollView,
    View } 
from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { Loading } from '../components/loading';

const SplashScreen = () =>{
    const navigation = useNavigation();

    const checkLoginStatus = () =>{
        navigation.navigate("Signup")
    }

    useEffect(() =>{
        setTimeout(() => {
            checkLoginStatus();
        }, 2000
        )
    })

    return(
        <ScrollView >
            <View style={{justifyContent: "center", alignItems: "center"}}>
                <Loading />
            </View>
        </ScrollView>
    )
}

export default SplashScreen;
