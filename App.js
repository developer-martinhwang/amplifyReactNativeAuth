import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Authenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
Amplify.configure(awsExports)
function Home(props) {
    let state = ""
    if(props.authState === "signedIn")
        state = <Text>You are signed in</Text>
    else
        state = <></>
    return state
}
export default function App() {
  return (
    <View style={styles.container}>
      <Authenticator usernameAttributes="email">
        <Home/>
      </Authenticator>
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
