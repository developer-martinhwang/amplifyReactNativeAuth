## Prerquisite

Node.js v10.x or later

npm v5.x or later

git v2.14.1 or later

## Build React Native Project with expo-cli
https://docs.amplify.aws/start/getting-started/setup/q/integration/react-native

expo init [project name]

expo start

## init amplify

amplify configure: 
https://docs.amplify.aws/start/getting-started/installation/q/integration/react-native#option-2-follow-the-instructions

amplify init

## Authentication with Amplify

amplify add auth

amplify push

## install Amplify libraries

npm install aws-amplify aws-amplify-react-native @react-native-community/netinfo

## Amplify Docs for React Native Authenticator
https://docs.amplify.aws/ui/auth/authenticator/q/framework/react-native

authState is the current authentication state (a string):
 - signIn
 - signUp
 - confirmSignIn
 - confirmSignUp
 - forgotPassword
 - requireNewPassword
 - verifyContact
 - signedIn

## get all users info in AWS 
cognito 
