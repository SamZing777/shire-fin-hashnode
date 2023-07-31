import React from 'react';
import {
    TouchableOpacity
} from 'react-native';

import { BillIcon } from './icons';
import { BillText } from './texts';
import styles from '../screens/styles';

const BillCard = ({icon, text, handlePress}) =>{
    return(
        <TouchableOpacity onPress={handlePress}
         style={styles.billCard}>
            <BillIcon icon={icon} />
            <BillText text={text} />
        </TouchableOpacity>
    )
}

export default BillCard;
