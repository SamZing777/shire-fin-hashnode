import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';

import { SignUpFields } from './partials/signupScreen';
import { ExistingUser } from './partials/signupScreen';
import styles from '../styles';

const SignupScreen = () =>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <SignUpFields />
                <ExistingUser />
            </View>
        </ScrollView> 
    )
}

export default SignupScreen;
