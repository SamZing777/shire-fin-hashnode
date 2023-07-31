import React from 'react';
import {
    ScrollView
} from 'react-native';

import { AppBar } from '../components/appBar';
import { LargeCard } from '../components/card';
import { 
    Options, 
    DebitView,
    CreditView
} from './partials/homeScreen';
import styles from './styles';

const HomeScreen = () =>{
    return(
        <ScrollView style={styles.screenColor}>
            <AppBar text={"Home"} />
            <LargeCard />
            <Options />
            <DebitView icon={"deskphone"} transaction={"Mobile Top-up"} amount={"-£5"} />
            <DebitView icon={"charity"} transaction={"Charity"} amount={"-£25"} />
            <CreditView icon={"point-of-sale"} transaction={"Market"} amount={"+£40"} />
            <DebitView icon={"airplane-check"} transaction={"Flight Ticket"} amount={"-£500"} />
        </ScrollView>
    )
}

export default HomeScreen;
