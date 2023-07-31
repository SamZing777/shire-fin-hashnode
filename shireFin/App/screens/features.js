import React from 'react';
import {
    ScrollView
} from 'react-native';

import { AppBar }from '../components/appBar';
import { Panel, Swipe } from './partials/featuresScreen';
import styles from './styles';

const FeaturesScreen = () =>{
    return(
        <ScrollView style={styles.screenColor}>
            <AppBar text={"My Shire"} />
            <Panel />
            <Swipe />
        </ScrollView>
            
    )
}

export default FeaturesScreen;
