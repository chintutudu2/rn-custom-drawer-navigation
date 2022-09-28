import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>profile</Text>
      <Button
        title="Notification"
        onPress={() => navigation.navigate('Notification')}
      />
      <Button title="Setting" onPress={() => navigation.navigate('Setting')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
