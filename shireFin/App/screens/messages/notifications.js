import React from 'react';
import {
    ScrollView
} from 'react-native';

import { ScreenAppBar } from '../../components/appBar';

const NotificationsScreen = () =>{
    return(
        <ScrollView>
            <ScreenAppBar text={"Notifications"} />
        </ScrollView>
    )
}

export default NotificationsScreen;
