import React from 'react';
import {
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@svgr-iconkit/material-community';

import style from './style';
import { Colors, fontSizes, Spaces } from '../constants/theme';

export const BaseIcon = ({icon}) =>{
    return(
        <Icon name={icon} color={Colors.primary} size={fontSizes.medium * 1.5} />
    )
}

export const TabIcon = ({icon}) =>{
    return(
        <View style={style.tabIcon}>
            <Icon name={icon} color={Colors.primary} size={fontSizes.medium * 1.5} />
        </View>
    )
}

export const SmallIcon = ({icon}) =>{
    return(
        <Icon name={icon} color={Colors.primary} size={fontSizes.small} />
    )
}

export const SuccessIcon = ({icon}) =>{
    return(
        <Icon name={icon} color={Colors.success} size={fontSizes.medium} />
    )
}

export const FeatureIcon = ({icon}) =>{
    return(
        <Icon name={icon} color={Colors.light} size={fontSizes.medium} />
    )
}

export const SearchIcon = () =>{
    return(
        <TouchableOpacity style={{marginTop: Spaces.medium / 1.1}}>
            <Icon name="search" color={Colors.primary} size={fontSizes.medium} />
        </TouchableOpacity>
    )
}

export const BackIcon = () =>{
    const navigation = useNavigation();

    return(
        <TouchableOpacity onPress={()=>navigation.pop(1)}>
            <Icon name="arrow-alt-circle-left" color={Colors.primary} size={fontSizes.large * 1.2} />
        </TouchableOpacity>
    )
}
