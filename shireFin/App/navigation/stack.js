import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginOrSignupScreen from '../screens/authentication/authenticationOption';
import SignupScreen from '../screens/authentication/signup';
import LoginScreen from '../screens/authentication/login';

import BottomTabs from './tab';
import HomeScreen from '../screens/home';
import CreateProfile from '../screens/authentication/createProfile';
import WalletScreen from '../screens/wallet';
import NotificationsScreen from '../screens/messages/notifications';

const Stack = createNativeStackNavigator();

const StackNavigate = () =>{
    return(
        <Stack.Navigator initialRouteName="Bottom Tab">
            <Stack.Screen name="Bottom Tab" component={BottomTabs}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
              {/* <Stack.Screen name="Login or Sign up" component={LoginOrSignupScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
              <Stack.Screen name="Sign up Screen" component={SignupScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
              <Stack.Screen name="Login Screen" component={LoginScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} /> */}
              <Stack.Screen name="Create Profile Screen" component={CreateProfile}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
            <Stack.Screen name="Home Screen" component={HomeScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
              <Stack.Screen name="Wallet Screen" component={WalletScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
              <Stack.Screen name="Notifications" component={NotificationsScreen}
            options={{
                headerStyle: {height: 0}, headerShown: false 
              }} />
        </Stack.Navigator>
    )
}

export default StackNavigate;
