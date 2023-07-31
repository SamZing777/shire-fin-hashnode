import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';

import { BaseIcon } from '../../components/icons';
import { FeatureCard } from '../../components/card';
import styles from '../styles';

export const Panel = () =>{
    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.features}>
                <FeatureCard icon={"wallet-plus"} text={"Top up"} />
                <FeatureCard icon={"airplane-takeoff"} text={"Flight Ticket"} />
                <FeatureCard icon={"food"} text={"Food Order"} />
            </View>
            <View style={styles.features}>
                <FeatureCard icon={"gift"} text={"Freebies"} />
                <FeatureCard icon={"home-city"} text={"Hotel Booking"} />
                <FeatureCard icon={"briefcase-account"} text={"Jobs"} />
            </View>
            <View style={styles.features}>
                <FeatureCard icon={"school"} text={"Pay Tuition Fee"} />
                <FeatureCard icon={"chat-question"} text={"Questionnaire"} />
            </View>
            <View style={styles.features}>
                <FeatureCard icon={"charity"} text={"Charity"} />
                <FeatureCard icon={"bank-transfer"} text={"Transfer Funds"} />
            </View>
            <View style={styles.features}>
                <FeatureCard icon={"car-3-plus"} text={"Car pooling"} />
            </View>
        </ScrollView>
    )
}

export const Swipe = () =>{
    return(
        <View style={styles.centeredContainer}>
            <BaseIcon icon={"gesture-swipe"} />
        </View>
    )
}

// export const NextPanel = () =>{
//     return(
//         <View style={styles.features}>
//             <FeatureCard icon={"calendar-check"} text={"Events"} />
//             <FeatureCard icon={"calendar-check"} text={"Exchange"} />
//             <FeatureCard icon={"gamepad-variant"} text={"Play"} />
//             <FeatureCard icon={"newspaper"} text={"Updates and Info"} />
//             <FeatureCard icon={"wallet-plus"} text={"Wallet Top up"} />
//         </View>
//     )
// }


