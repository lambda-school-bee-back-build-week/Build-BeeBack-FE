import {
    BEE_ALL_START, 
    BEE_ALL_SUCCESS, 
    BEE_ALL_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCHING,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE

    


} from '../actions/index'

const initialstate ={
    
        fetchingdata: false,
        dataAll: [],
        loggingIn: false,
        isfetching:false,
        error: null
      
};

export const rootReducer = (state = initialstate, action) =>{
    
    switch (action.type){
        case BEE_ALL_START: 
        return{
          ...state,
          err: '',
          fetchingFriends: true
        }
        case BEE_ALL_SUCCESS:
        return{
          ...state,
          err: '',
          isfetching: false,
          dataAll: action.payload
        }
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

         case REGISTER_START:
         return{
             ...state,
             loggingIn: false,
             isfetching: true,
         }
         case REGISTER_SUCCESS:
         return{
             ...state,
             loggingIn: true,
             isfetching: false,
         }
         case REGISTER_FAILURE:
         return{
             ...state,
             loggingIn:false,
             isfetching: false,
             err: 'ooops'
         }
        //  case ADD_FRIEND:
        //  return{
        //      friend: [...state.friend, action.payload]

        //  }
        case BEE_ALL_FAILURE:
        default:
          return state;

          
    }




}