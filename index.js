import { AppRegistry } from 'react-native';
import App from './App';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBc8bc_RsuYpUMZlfzBlgCTryqcExw4rWw",
    authDomain: "firestoreimp.firebaseapp.com",
    databaseURL: "https://firestoreimp.firebaseio.com",
    projectId: "firestoreimp",
    storageBucket: "firestoreimp.appspot.com",
    messagingSenderId: "39142841907"
};
firebase.initializeApp(config);

AppRegistry.registerComponent('temp1', () => App);
