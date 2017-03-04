

import {LOGGED_IN, LOGGED_OUT,  LOGGIN_FAILED,FECTH_LOGGEDIN_REQUEST} from './types';

export const fetchLoginRequest = function(){
  return{
    type:FECTH_LOGGEDIN_REQUEST,
  }
}

export const loggedInSucces = function(user){
  return{
    type:LOGGED_IN,
    user
  }
}
export const loggedInError = function(error){
  return{
    type:LOGGIN_FAILED,
    error
  }
}


export const fetchLogin = function(params) {

  return dispatch => {

    dispatch(fetchLoginRequest());
    const API = 'https://api.github.com/users';
    let url = `${API}/${"manjeets12"}`;
    return fetch(url)
      .then(response => response.json())
      .then(user=> {
        console.log(user);
        //dispatch(loggedInSucces(user));
      })
      .catch((error) => {
        dispatch(loggedInError(error))
      });
  }
}
