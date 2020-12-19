/**
 * Copyright (c) 2020 developer.martinhwang@gmail.com
 * All rights reserved.
 *
 * Filename: App.js
 *
 * Key Options:
 * - main component which acts a container for all other components
 *
 * Revision History:
 * - Dec 14, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 */
import React from 'react'
// react native
import { StyleSheet, Text, View } from 'react-native'

import { Authenticator } from 'aws-amplify-react-native'
// aws amplify
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { StatusBar } from 'expo-status-bar'
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
      <StatusBar style="auto" />
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
