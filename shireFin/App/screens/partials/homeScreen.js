import React from 'react';
import {
    View
} from 'react-native';
import { BaseIcon } from '../../components/icons';

import { Paragraph, MediumText, DebitText, CreditText } from '../../components/texts';
import { DefaultButton, PrimaryDefaultButton } from '../../components/buttons';
import styles from '../styles';

export const Options = () =>{
    return(
        <View style={styles.row}>
            <DefaultButton title={"Deposit"} handlePress={null} />
            <PrimaryDefaultButton title={"Withdraw"} handlePress={null} />
        </View>
    ) 
}

export const DebitView = ({icon, transaction, amount}) =>{
    return(
        <View style={styles.transactionRow}>
            <View style={styles.iconView}>
                <BaseIcon icon={icon} />
            </View>
            <View style={styles.transaction}>
                <MediumText text={transaction} />
                <DebitText text={amount} />
            </View>
        </View>
    )
}

export const CreditView = ({icon, transaction, amount}) =>{
    return(
        <View style={styles.transactionRow}>
            <View style={styles.iconView}>
                <BaseIcon icon={icon} />
            </View>
            <View style={styles.transaction}>
                <MediumText text={transaction} />
                <CreditText text={amount} />
            </View>
        </View>
    )
}
