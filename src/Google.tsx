import React from 'react';
import {Button, StyleSheet, Pressable, Text, View} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

type ButtonProps = {
  login(): void;
};

export const LogInWithGoogle: React.FunctionComponent<ButtonProps> = ({
  login,
}) => {
  return (
    <View style = {styles.container}>
    <Pressable
      style = {styles.btn}
      color = '#05668D'
      title={'Sign in with Google'}
      onPress={() => {
        GoogleSignin.configure();
        GoogleSignin.hasPlayServices()
          .then(hasPlayService => {
            if (hasPlayService) {
              GoogleSignin.signIn()
                .then(userInfo => {
                  login();
                  console.log(JSON.stringify(userInfo));
                })
                .catch(e => {
                  console.log('ERROR IS: ' + JSON.stringify(e));
                });
            }
          })
          .catch(e => {
            console.log('ERROR IS: ' + JSON.stringify(e));
          });
      }}
    >
      <Text style = {styles.text}> Sign into Google </Text>
    </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    padding: 5,
    margin: 20,
    color: 'black',
    backgroundColor: '#05668D',
    alignItems: 'center',
    borderRadius: 5
  },
  text: {
    color: 'white',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

