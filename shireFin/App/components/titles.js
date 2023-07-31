import React from 'react';
import {View} from 'react-native';

import { BackIcon } from './icons';
import { Title } from './texts';
import styles from '../screens/styles';

export const ScreenTitle = ({text}) =>{
    return(
        <View style={styles.centeredContainer}>
            <Title text={text} />
        </View>
    )
}

export const InnerScreenTitle = ({text}) =>{
    return(
        <View style={styles.screenTitle}>
            <BackIcon />
            <Title text={text} />
            <View></View>
        </View>
    )
}

export const AuthTitle = ({text}) =>{
    return(
        <View style={styles.centeredContainer }>
            <Title text={text} />
        </View>
    )
}
