import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>home</Text>
      <Button title="Drawer" onPress={() => navigation.navigate('Drawer')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
