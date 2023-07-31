import React from 'react';
import {
    TouchableOpacity,
    Text,
    Pressable
} from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';

import { MediumText, SaveText, MediumLightText, AuthText } from './texts';
// import { Spaces } from '../constants/theme';
import { BaseIcon } from './icons';
import style from './style';

export const DefaultButton = ({title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.button}>
            <MediumText text={title} />
        </TouchableOpacity>
    )
}

export const PrimaryDefaultButton = ({title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.primaryDefaultButton}>
            <MediumLightText text={title} />
        </TouchableOpacity>
    )
}

export const PrimaryButton = ({title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.primaryButton}>
            <MediumLightText text={title} />
        </TouchableOpacity>
    )
}

export const AuthButton = ({title, handlePress}) =>{    
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.authButton}>
            <MediumText text={title} />
        </TouchableOpacity>
    )
}

export const IconButton = ({icon, title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.iconButton}>
            <BaseIcon icon={icon} />
            <MediumText text={title} />
        </TouchableOpacity>
    )
}

export const SmallButton = ({title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.smallButton}>
            <Text style={style.smallButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export const EditButton = ({handlePress, title}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.editButton}>
            <MediumText text={title} />
        </TouchableOpacity>
    )
}

export const SaveButton = ({handlePress, title}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.saveButton}>
            <SaveText text={title} />
        </TouchableOpacity>
    )
}

export const AirtimeButton = ({title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.airtimeButton}>
            <MediumText text={title} />
        </TouchableOpacity>
    )
}

export const AmountButton = ({title, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
        style={style.amountButton}>
            <MediumText text={title} />
        </TouchableOpacity>
    )
}

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user]

export const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} style={style.signOutButton}>
      <AuthText title="Sign out" />
    </Pressable>
  )
};
