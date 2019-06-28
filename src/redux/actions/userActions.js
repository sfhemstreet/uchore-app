import {REQUEST_SIGNIN_PENDING,
        REQUEST_SIGNIN_SUCCESS,
        REQUEST_SIGNIN_FAILED,
        REQUEST_REGISTER_PENDING,
        REQUEST_REGISTER_SUCCESS,
        REQUEST_REGISTER_FAILED,
        SIGN_OUT_USER } from '../constants/user_constants.js';


// SIGN IN
export const signIn = (signInEmail, signInPassword) => (dispatch) => {
    console.log(signInEmail,signInPassword)
    dispatch({ type: REQUEST_SIGNIN_PENDING })
    fetch('http://localhost:3000/signin', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            email: signInEmail,
            password: signInPassword
        })
    })
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => dispatch({ type: REQUEST_SIGNIN_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_SIGNIN_FAILED, payload: error}));
    
}

// REGISTER
export const register = () => (dispatch) => {
    /* FIX THIS FOR REDUX
    if(!this.state.email || !this.state.name || !this.state.password){
        return console.log('Whatttt');
    }
    */
    dispatch({ type: REQUEST_REGISTER_PENDING })
    fetch('http://localhost:3000/register', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            // FIX THIS FOR REDUX
            email: this.props.registerEmail,
            password: this.props.registerPassword,
            name: this.props.registerName
        })
    })
    .then(response => response.json())
    .then(data => dispatch({ type: REQUEST_REGISTER_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_REGISTER_FAILED, payload: error})); 
    
}

// SIGN OUT
export const signOutUser = () => (
    { type: SIGN_OUT_USER }
);