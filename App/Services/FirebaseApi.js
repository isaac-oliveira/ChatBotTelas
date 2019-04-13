import firebase from '@firebase/app' 
import '@firebase/auth'
import { config } from '../Config/FirebaseConfig'

firebase.initializeApp(config)

const create = () => {
    const createUser = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password)
    const loginUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)
    const getUser = () => firebase.auth().currentUser

    return {
        createUser,
        loginUser,
        getUser
    }
}

export default {
    create
}

