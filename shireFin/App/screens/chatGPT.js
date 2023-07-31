import React from 'react';
import {
    ScrollView
} from 'react-native';

import { AppBar } from '../components/appBar';
import styles from './styles';

const ChatGPTScreen = () =>{
    return(
        <ScrollView style={styles.screenColor}>
            <AppBar text={"ChatGPT"} />
        </ScrollView>
    )
}

export default ChatGPTScreen;
