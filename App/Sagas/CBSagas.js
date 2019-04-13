import { put } from 'redux-saga/effects'
import CBActions from '../Redux/CBRedux'

export function * createUser(api, {username, email, password}) {
    try {
        yield api.createUser(email, password)
        let user = yield api.getUser()
        if(user != null) {
            user.updateProfile({displayName: username,})
        }
    } catch(error) {
        alert(error)
    }
}

export function * loginUser(api, {email, password}) {
    try {
       yield  alert(api.loginUser(email, password))
       let user = yield api.getUser()
       if (user != null) {
           let username = user.displayName
           yield put(CBActions.userSuccess(username))
       }
    } catch(error) {
        alert(error)
    }
}