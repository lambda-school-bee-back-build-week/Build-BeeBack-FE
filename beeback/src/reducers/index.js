import {
    // FETCH_FRIENDS_START, 
    // FETCH_FRIENDS_SUCCESS, 
    // FETCH_FRIENDS_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FETCHING,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_FAILURE,
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILURE

    


} from '../actions/index'

const initialstate ={
    
        fetchingdata: false,
        
        data: [],
        loggingIn: false,
        isfetching:false,
        error: '',
        isupdated:false,
        isdeleted:false,
      
};

export const rootReducer = (state = initialstate, action) =>{
    
    switch (action.type){
        case UPDATE_START:
        return{
            ...state,
            fetchingdata:true
            
            

        }
        case UPDATE_SUCCESS:
        return{
            ...state,
            fetchingdata: false,
            isupdated: true
            
        }
        case UPDATE_FAILURE:
        return{
            ...state,
            fetchingdata: false,
            isupdated: false
            
        }
        case DELETE_START:
        return{
            ...state,
            fetchingdata:true,
            isdeleted:false
            
        }
        case DELETE_SUCCESS:
        return{
            ...state,
            fetchingdata:false,
            isdeleted:true
            
        }
        case DELETE_FAILURE:
        return{
            ...state,
            fetchingdata:false,
            isdeleted:false
            
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
             err: action.payload
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
        // case FETCH_FRIENDS_FAILURE:
        default:
          return state;

          
    }




}