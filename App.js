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

import { StatusBar } from 'expo-status-bar'
// aws amplify
import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { Authenticator, SignIn, ConfrimSignIn, ConfirmSignUp, ForgotPassword} from 'aws-amplify-react-native'
// components
import SignUp from "./src/components/SignUp"
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
      <Authenticator 
        usernameAttributes="email" 
        hideDefault={true}
        authState="signIn"
        onStateChange={(authState) => {console.log(authState)}}>
        <Home/>
        <SignUp override={'SignUp'}/>
        <SignIn/>
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
