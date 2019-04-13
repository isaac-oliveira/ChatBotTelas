import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const {Types, Creators} = createActions({
    createUser:  ['username', 'email', 'password'],
    loginUser: ['email', 'password'],
    userSuccess: ['username'],

})

export const CBTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
    username: null,
    email: null,
    password: null,
})

export const CBSelectors = {
    selectUsername: state => state.user.username
}

export const createUser = (state, {username, email, password}) => {
    return state.merge({username, email, password})
}

export const loginUser = (state, {email, password}) => {
    return state.merge({email, password})
} 

export const success = (state, action) => {
    const { username } = action
    return state.merge({ username })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CREATE_USER]: createUser, 
    [Types.LOGIN_USER]: loginUser,
    [Types.USER_SUCCESS]: success,
})