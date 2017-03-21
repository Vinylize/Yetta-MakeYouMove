import admin from 'firebase-admin';

const serviceAccount = require('../firebaseDev.json');

const adminOption = {
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://vinyl-73696.firebaseio.com/'
};

admin.initializeApp(adminOption);
console.log('firebase is initialized.');

const db = admin.database();

const userRef = db.ref('/user');
const userPropertiesRef = db.ref('/userProperties');

const refs = {
  user: {
    root: userRef,
    coordinate: userPropertiesRef.child('coordinate'),
  },
};

export {
  admin,
  refs
};
