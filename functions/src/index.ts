import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

export const userOnDelete = functions.auth.user().onDelete(async user => {
  console.log(`ID do usuário: ${user.uid}`)
  const userStore = await admin.firestore().collection('students').doc(user.uid).delete()
  return userStore
})

// export const userOnCreate = functions.auth.user().onCreate(async user => {
//   const userStore = await admin.firestore().collection('students')
//   .doc(user.uid)
//   .collection('methods').add({methods: '[]'})
//   return userStore
// })