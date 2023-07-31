import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import { Colors, fontSizes } from '../constants/theme';
import { TabIcon } from '../components/icons';
import HomeScreen from '../screens/home';
import WalletScreen from '../screens/wallet';
import FeaturesScreen from '../screens/features';
import ChatGPTScreen from '../screens/chatGPT';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () =>{
    return(
        <Tab.Navigator initialRouteName="Home"
            barStyle={{ backgroundColor: 'aliceblue' }}
            >
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarLabel:() => {return null},
                tabBarIcon: () => (
                    <TabIcon icon={"home"} size={fontSizes.medium * 1.5} />
                )
              }} />

        <Tab.Screen name="Wallet" component={WalletScreen}
            options={{
                tabBarLabel:() => {return null},
                tabBarIcon: () => (
                    <TabIcon icon={"wallet"} size={fontSizes.medium * 1.5} />
                )
              }} /> 

        <Tab.Screen name="Feature" component={FeaturesScreen}
        options={{
            tabBarLabel:() => {return null},
            tabBarIcon: () => (
                <TabIcon icon={"shark-fin"} size={fontSizes.medium * 1.5} />
            )
        }} /> 

        <Tab.Screen name="ChatGPT" component={ChatGPTScreen}
            options={{
                tabBarLabel:() => {return null},
                tabBarIcon: () => (
                    <TabIcon icon={"robot"} size={fontSizes.medium * 1.5} />
                )
              }} /> 
        </Tab.Navigator>
    )
}

export default BottomTabs;
