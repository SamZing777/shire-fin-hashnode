import React from 'react';
import {
    ScrollView
} from 'react-native';

import { AppBar } from '../components/appBar';
import { Options, WalletCardView } from './partials/wallet';
import styles from './styles';

const WalletScreen = () =>{
    return(
        <ScrollView style={styles.screenColor}>
            <AppBar text={"Wallet"} />
            <Options />
            <WalletCardView />
        </ScrollView>
    )
}

export default WalletScreen;
