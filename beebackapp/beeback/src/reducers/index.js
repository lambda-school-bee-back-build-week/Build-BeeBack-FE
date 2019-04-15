import {
    // FETCH_FRIENDS_START, 
    // FETCH_FRIENDS_SUCCESS, 
    // FETCH_FRIENDS_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCHING,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE

    


} from '../actions/index'

const initialstate ={
    
        fetchingFriends: false,
        
        friend: [],
        loggingIn: false,
        isfetching:false,
        error: null
      
};

export const rootReducer = (state = initialstate, action) =>{
    
    switch (action.type){
        // case FETCH_FRIENDS_START:
        // return{
        //   ...state,
        //   err: '',
        //   fetchingFriends: true
        // }
        // case FETCH_FRIENDS_SUCCESS:
        // return{
        //   ...state,
        //   err: '',
        //   isfetching: false,
        //   friend: action.payload
        // }
         case LOGIN_FETCHING:
         return{
             ...state,
             loggingIn: false,
             isfetching: true,
         }
         case LOGIN_SUCCESS:
         return{
             ...state,
             loggingIn: true,
             isfetching: false,
         }
         case LOGIN_FAILURE:
         return{
             ...state,
             loggingIn:false,
             isfetching: false,
             err: 'ooops'
         }
        //  case ADD_FRIEND:
        //  return{
        //      friend: [...state.friend, action.payload]

        // //  }
        // case FETCH_FRIENDS_FAILURE:
        // default:
        //   return state;

          
    }




}