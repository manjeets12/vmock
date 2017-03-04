

import {LOGGED_IN, LOGGED_OUT,LOGGIN_FAILED,FECTH_LOGGEDIN_REQUEST} from '../../actions/types';

export type State = {
  isLoggedIn: ?boolean;
  isFetching:?boolean;
  isFailed:?boolean;
  userName:?string;
  error:?string;
};

const initialState = {
  isLoggedIn: false,
  userName:"",
  isFetching:false,
  isFailed:false,
  error:""
};

function user(state: State = initialState, action: Action): State {
  switch(action.type){
    case FECTH_LOGGEDIN_REQUEST:
         return {...state, isFetching:true}
    case LOGGED_IN:
         return {...action.data, isFetching:false, isFailed:false, isLoggedIn:true};
    case LOGGIN_FAILED:
         return {...state, isFetching:false, isFailed:true, isLoggedIn:false}
    case LOGGED_OUT:
         return initialState;
    default:
         return state;
  }
}
module.exports = user;