/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {View, Button, StyleSheet, Text, Platform, ScrollView, TextInput} from 'react-native';
import {Card, Input} from 'react-native-elements';
import notifee, {
  AndroidImportance,
  AndroidVisibility,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {notifications} from './utils/notifications';
import {triggers} from './utils/triggers';
import ContextDate from './context/DateContext';



type Props = {};



// : React.FC<Props>  
export const Content = ({navigation} : any) => {
  /* Change the notification payload */
  const notification = notifications.basic;
  const {time, setTime} = useContext(ContextDate);
  /* Change the trigger type */
  const triggerType = triggers.timestamp;

  const onDisplayNotificationPress = async () => {
    await notifee.deleteChannel(notification.android?.channelId || 'default');
    // Create a channel
    await notifee.createChannel({
      id: notification.android?.channelId || 'default',
      name: notification.android?.channelId || 'default',
      // importance: notification.android?.importance || AndroidImportance.DEFAULT,
      importance: AndroidImportance.HIGH,
      // visibility: notification.android?.visibility || AndroidVisibility.PRIVATE,
      vibration: true,
      sound: notification.android?.sound || 'default',
    });

    try {
      await notifee.displayNotification(notification);
    } catch (e) {
      console.error(e);
    }
  };

  const onTriggerNotificationPress = async () => {
    await notifee.deleteChannel(notification.android?.channelId || 'default');
    // const date = new Date(Date.now());
    // date.setHours(17);
    // date.setMinutes(19);
    // Create a channel
    await notifee.createChannel({
      id: notification.android?.channelId || 'default',
      name: notification.android?.channelId || 'default',
      importance: notification.android?.importance || AndroidImportance.DEFAULT,
      visibility: notification.android?.visibility || AndroidVisibility.PRIVATE,
      vibration: true,
      sound: notification.android?.sound || 'default',
    });
    const channel = await notifee.getChannel(
      notification.android?.channelId || 'default',
    );
    console.log('notification.channel', channel);
    /* Change the trigger */
    const trigger = triggerType();

    await notifee.createTriggerNotification( notification,
    trigger );
    console.log('Trigger created: ', notification, trigger);
  };
  async function onCreateTriggerNotification() {
    await notifee.deleteChannel(notification.android?.channelId || 'default');
    let NowDate = new Date(Date.now());
    const date = new Date(Date.now());
    date.setHours(10);
    date.setMinutes(33);
    let nowDateHours = NowDate.getHours()
    let nowDateMinutes = NowDate.getMinutes()
    let dateHours = date.getHours()
    let dateMinutes = date.getMinutes()
    // Create a channel
    await notifee.createChannel({
      id: notification.android?.channelId || 'default',
      name: notification.android?.channelId || 'default',
      importance: notification.android?.importance || AndroidImportance.DEFAULT,
      visibility: notification.android?.visibility || AndroidVisibility.PRIVATE,
      vibration: true,
      sound: notification.android?.sound || 'default',
    });
    const channel = await notifee.getChannel(
      notification.android?.channelId || 'default',
    );
    console.log('notification.channel', channel);
    /* Change the trigger */
    const trigger = triggerType();
      if (nowDateHours = dateHours &&( nowDateMinutes = dateMinutes)) {
        await notifee.createTriggerNotification( notification,
          trigger );
          console.log('Trigger created: ', notification, trigger);
      }
    // await notifee.createTriggerNotification( notification,
    // trigger );
    // console.log('Trigger created: ', notification, trigger);
  }

  const onAPIPress = async () => {
    /* Change the API function to test */
    const result = await notifee.cancelAllNotifications();

    console.log('onAPIPress -> ', result != null ? result : 'API Call Success');
  };

  const seances= [
    {
      name: 'relaxation',
      avatar: '',
    },
  ];

  return (
    <ScrollView>
    <View style={styles.container}>
      <Card>
        <Card.Title>S??ance : Relaxation</Card.Title>
        <Card.Divider />
        <Card.FeaturedTitle>Relaxation</Card.FeaturedTitle>
          <Button title="Create Trigger Notification" onPress={() => onCreateTriggerNotification()} />
        <Button
              color={(Platform.OS === 'ios' && '#fff') || '#44337A'}
              title={'Programmer des rappels'}
              onPress={()=>navigation.navigate('dating')}
            />
      </Card>
      <View style={styles.content}>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>{`Notification:`}</Text>
          </View>
          <View style={[styles.button]}>
        </View>
            <Button
              color={(Platform.OS === 'ios' && '#fff') || '#44337A'}
              title={'Display Notification'}
              onPress={onDisplayNotificationPress}
            />
          </View>
        </View>
        <View style={styles.contentItem}>
          <View style={styles.contentItemText}>
            <Text>{`Trigger Type: ${triggerType.name}`}</Text>
          </View>
          <View style={[styles.button]}>
            <Button
              color={(Platform.OS === 'ios' && '#fff') || '#44337A'}
              title={'Create Trigger Notification'}
              onPress={onTriggerNotificationPress}
            />
          </View>
        </View>
        <View style={[styles.contentItem, styles.apiActionButton]}>
          <View style={[styles.button]}>
            <Button
              color={(Platform.OS === 'ios' && '#fff') || '#44337A'}
              title={'Test Notifee API Action'}
              onPress={onAPIPress}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default {Content};

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
