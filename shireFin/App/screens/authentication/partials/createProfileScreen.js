import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import DateTimePicker from '@react-native-community/datetimepicker';
// import {API, graphqlOperation} from 'aws-amplify';
// import { DataStore } from '@aws-amplify/datastore';


import { MediumText } from '../../../components/texts';
import { AuthButton } from '../../../components/buttons';
import { Input } from '../../../components/fields';
import styles from '../../styles';

const CreateProfileScreen = () =>{
    const navigation = useNavigation();
    const [isSelected, setSelection] = useState(false);
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    // DateTimePickerAndroid.open(params, AndroidNativeProps)
    // DateTimePickerAndroid.dismiss(mode, AndroidNativeProps['mode'])

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatePicker = () => {
        showMode('date');
    };

    // Format the date as "July 30, 2023"
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'narrow',
    });

    const homeScreen = () =>{
       navigation.navigate("Home Screen");
    }

    return(
        <View>
            <View style={styles.startContainer}>
                    <MediumText text="First Name" />
            </View>
            <View style={styles.editAccount}>
                <Input place="John"
                value={null} handleInput={null} />
            </View>

            <View style={styles.startContainer}>
                    <MediumText text="Last Name" />
            </View>
            <View style={styles.editAccount}>
                <Input place="Doe"
                value={null} handleInput={null} />
            </View>

            <View style={styles.startContainer}>
                <MediumText text="Date of birth" />
                <AuthButton handlePress={showDatePicker} title="Select date of birth" />
            
                {show && (
                    <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    />
                )}

                <MediumText text={formattedDate} />
            </View>
            

            <View style={styles.startContainer}>
                    <MediumText text="Gender" />
            </View>

            <BouncyCheckbox
                style={{ marginTop: 4 }}
                isChecked={isSelected}
                text="Male"
                onPress={() => setSelection(!isSelected)}
            />

            <BouncyCheckbox
                style={{ marginTop: 4 }}
                isChecked={isSelected}
                text="Female"
                onPress={() => setSelection(!isSelected)}
            />

            <BouncyCheckbox
                style={{ marginTop: 4 }}
                isChecked={isSelected}
                text="Other"
                onPress={() => setSelection(!isSelected)}
            />

            <View style={styles.startContainer}>
                    <MediumText text="Country" />
            </View>   

            <BouncyCheckbox
                style={{ marginTop: 4 }}
                isChecked={isSelected}
                text="Nigeria"
                onPress={() => setSelection(!isSelected)}
            />        

            <BouncyCheckbox
                style={{ marginTop: 4 }}
                isChecked={isSelected}
                text="United Kingdom"
                onPress={() => setSelection(!isSelected)}
            />  

            <AuthButton title={"Save"} handlePress={homeScreen} />
        </View>
    )
}

export default CreateProfileScreen;
