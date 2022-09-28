import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Setting" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
