import { takeLatest, all } from 'redux-saga/effects'
import FirebaseApi from '../Services/FirebaseApi'

/* ------------- Types ------------- */

import { CBTypes } from '../Redux/CBRedux'


/* ------------- Sagas ------------- */
import { createUser, loginUser } from './CBSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const firebaseApi = FirebaseApi.create()
/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(CBTypes.CREATE_USER, createUser, firebaseApi),
    takeLatest(CBTypes.LOGIN_USER, loginUser, firebaseApi)

  ])
}
