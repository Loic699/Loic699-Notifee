/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {View, Button, StyleSheet, Text, Platform, ScrollView, TextInput} from 'react-native';
import {Card, Input} from 'react-native-elements';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
} from '@notifee/react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {notifications} from './utils/notifications';
import {triggers} from './utils/triggers';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ContextDate from './context/DateContext';


export const Dating = ({navigation}) => {
    let date = moment(new Date()).format("YYYY-MM-D-ss");
    
    const {time, setTime} = useContext(ContextDate)
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
      };
  
    const onDateChange = (date, type) => {
      //function to handle the date change
      if (type === 'END_DATE') {
        setSelectedEndDate(date);
      } else {
        setSelectedEndDate(null);
        setSelectedStartDate(date);
      }
    };
  
    return(
      <ScrollView>
      <View>
          <View >
                  <CalendarPicker
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={new Date(2018, 1, 1)}
              maxDate={new Date(2050, 6, 3)}
              weekdays={
                [
                  'Mon', 
                  'Tue', 
                  'Wed', 
                  'Thur', 
                  'Fri', 
                  'Sat',
                  'Sun',
                ]}
              months={[
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]}
              previousTitle="Previous"
              nextTitle="Next"
            //   todayBackgroundColor="#e6ffe6"
            todayBackgroundColor="orange"
              selectedDayColor="grey"
              selectedDayTextColor="#000000"
              scaleFactor={375}
              textStyle={{
                fontFamily: 'Cochin',
                color: '#44306a',
              }}
              onDateChange={onDateChange}
              />
              </View>
              <View style={styles.textStyle}>
            <Text style={styles.textStyle}>
              Date de d??but :  {selectedStartDate ? selectedStartDate.toString() : ''}
            </Text>
            <Text style={styles.textStyle}>
              Date de fin : {selectedEndDate ? selectedEndDate.toString() : ''}
            </Text>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            />
             <Button
              color={(Platform.OS === 'ios' && '#fff') || '#44337A'}
              title={'HeaderLeft component'}
              onPress={()=>navigation.navigate('header')}
            />
            {/* <TextInput 
            // style={styles.timeInp} 
                keyboardType={"numeric"} 
                value={time} 
                // onChangeText={(time) => setTime(time)}
                 />
            <TextInput placeholder={"Choisissez une heure de rappel"} /> */}
            </View>
      </View>
      </ScrollView>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 0.6,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#F5FCFF',
      marginTop: 50,
    },
    textStyle: {
      marginTop: 10,
    },
    content: {
      // justifyContent: 'space-evenly',
      flex: 0.5,
    },
    contentItem: {
      margin: 20,
    },
    apiActionButton: {
      marginTop: 30,
    },
    contentItemText: {
      textAlign: 'left',
      marginBottom: 5,
    },
    button: {
      backgroundColor: '#44337A',
      color: 'white',
    },
  });

  export default {Dating};
  