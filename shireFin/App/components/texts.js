import React from 'react';
import { 
    Text,
    Pressable
 } from 'react-native';

import style from './style';

export const Paragraph = ({text}) =>{
    return(
        <Text style={style.paragraph}>
            {text}
        </Text>
    )
}

export const BlackText = ({text}) =>{
    return(
        <Text style={style.blackText}>
            {text}
        </Text>
    )
}

export const Title = ({text}) =>{
    return(
        <Text style={style.title}>
            {text}
        </Text>
    )
}

export const SmallTitle = ({text}) =>{
    return(
        <Text style={style.screenTitle}>
            {text}
        </Text>
    )
}

export const FocalText = ({text}) =>{
    return(
        <Text style={style.focalText}>
            {text}
        </Text>
    )
}

export const MediumText = ({text}) =>{
    return(
        <Text style={style.mediumText}>
            {text}
        </Text>
    )
}

export const SaveText = ({text}) =>{
    return(
        <Text style={style.saveText}>
            {text}
        </Text>
    )
}

export const DebitText = ({text}) =>{
    return(
        <Text style={style.debitText}>
            {text}
        </Text>
    )
}

export const CreditText = ({text}) =>{
    return(
        <Text style={style.creditText}>
            {text}
        </Text>
    )
}

export const LightText = ({text}) =>{
    return(
        <Text style={style.lightText}>
            {text}
        </Text>
    )
}

export const MediumLightText = ({text}) =>{
    return(
        <Text style={style.mediumLightText}>
            {text}
        </Text>
    )
}

export const AuthText = ({title}) =>{
    return(
        <MediumLightText text={title} />
    )
}

export const LargeText = ({text}) =>{
    return(
        <Text style={style.largeText}>
            {text}
        </Text>
    )
}

// export const SuccessText = () =>{
//     return(
//         <Text style={style.successText}>
//             Success
//         </Text>
//     )
// }
