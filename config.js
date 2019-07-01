import Firebase from 'react-native-firebase';
let config = {
  apiKey: 'AIzaSyCEj_PrVcaIerFMtxWfVZ7_b2nDIc0K6Mc',
  authDomain: 'firereact-4a755.firebaseapp.com',
  databaseURL: 'firereact-4a755.firebaseapp.com',
  projectId: 'firereact-4a755',
  storageBucket: 'firereact-4a755.appspot.com'
};

export const fb = Firebase.initializeApp(config);