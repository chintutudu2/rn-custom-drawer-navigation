import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const CustomDrawer = (props: any) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          navigation.navigate('Notification');
        }}>
        <Text>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.content}
        onPress={() => {
          navigation.navigate('Setting');
        }}>
        <Text>Setting</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
