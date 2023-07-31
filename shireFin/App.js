import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from '@aws-amplify/ui-react-native';

import StackNavigate from './App/navigation/stack';

const App = () =>{
    return(
      <NavigationContainer>
        <StackNavigate />
      </NavigationContainer>
    )
  };

export default withAuthenticator(App);
