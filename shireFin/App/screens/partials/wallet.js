import React from 'react';
import {
    View
} from 'react-native';

import { BaseIcon } from '../../components/icons';
import { Paragraph, MediumText, DebitText, CreditText } from '../../components/texts';
import { IconButton } from '../../components/buttons';
import styles from '../styles';
import { WalletCard } from '../../components/card';

export const Options = () =>{
    return(
        <View style={styles.tightRow}>
            <IconButton icon={"book-information-variant"} title={"Account Info"} handlePress={null} />
            <IconButton icon={"file-download-outline"} title={"Statement"} handlePress={null} />
        </View>
    ) 
}

export const WalletCardView = () =>{
    return(
        <View style={styles.walletContainer}>
            <WalletCard icon={"plus-circle"} text={"Fund Wallet"} handlePress={null} />
            <WalletCard icon={"bank-transfer"} text={"Transfer"} handlePress={null} />
            <WalletCard icon={"cash-refund"} text={"Withdraw"} handlePress={null} />
            <WalletCard icon={"bitcoin"} text={"Crypto"} handlePress={null} />
        </View>
    )
}
