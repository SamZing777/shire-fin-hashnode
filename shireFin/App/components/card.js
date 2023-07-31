import React from 'react';
import {
     TouchableOpacity,
     Image,
     Pressable,
     View
} from 'react-native';

import { BaseIcon, FeatureIcon } from './icons';
import { LightText, MediumText, LargeText } from './texts';
import { Flag } from '../constants/images';
import style from './style';

export const LargeCard = () =>{
    return(
        <View style={style.largeCard}>
            <View>
                <MediumText text={"Balance"} />
                <LargeText text={"£850.24"} />
            </View>
            <TouchableOpacity>
                <Image source={Flag.GB} style={style.smallRoundedImage} />
            </TouchableOpacity>
        </View>
    )
}

export const FeatureCard = ({handlePress, icon, text}) =>{
    return(
        <TouchableOpacity style={style.featureCard}
        onPress={handlePress}>
            <FeatureIcon icon={icon} />
            <LightText text={text} />
        </TouchableOpacity>
    )
}

export const WalletCard = ({handlePress, icon, text}) =>{
    return(
        <Pressable style={style.walletCard}
        onPress={handlePress}>
            <BaseIcon icon={icon} />
            <MediumText text={text} />
        </Pressable>  
    )
}
