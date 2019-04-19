import axios from 'axios'
 
// export const  FETCH_FRIENDS_START = 'FETCH_FRIENDS_START'
// export const  FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
// export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE' 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const  LOGIN_FETCHING ='LOGIN_FETCHING'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
// export const ADD_FRIEND = 'ADD_FRIEND'
// export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
// export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCESS'
export const REGISTER_FAILURE= 'REGISTER_START'
export const UPDATE_START = 'UPDATE_START'
export const UPDATE_SUCCESS = "UPDATE_SUCCESS"
export const UPDATE_FAILURE= "UPDATE_FAIL"
export const DELETE_START = "DELETE_START"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_FAILURE = "DELETE_FAIL"




export const Delete = (userID) => dispatch =>{
    dispatch({type: DELETE_START})
    axios.delete(
        `https://beeback.herokuapp.com/api/user/${userID}`,
        {headers: {authorization:localStorage.getItem('token')}}
        
    )
    .then( res => {

        dispatch({
            type: DELETE_SUCCESS,
            payload: res.data
        })

    })
    .catch(err =>{
        dispatch({
            type: DELETE_FAILURE,
            payload: err
        })
    })
}

export const Update = (userID) => dispatch =>{
    dispatch({type: UPDATE_START})
    axios.get(
        `https://beeback.herokuapp.com/api/user/${userID}`,
        {headers: {authorization:localStorage.getItem('token')}}
        
    )
    .then( res => {

        dispatch({
            type: UPDATE_START,
            payload: res.data
        })

    })
    .catch(err =>{
        dispatch({
            type: UPDATE_FAILURE,
            payload: err
        })
    })
}







export const loginSuccess = (thegoods) => dispatch =>{
    dispatch({type: LOGIN_FETCHING})

    return axios.post(
        `https://beeback.herokuapp.com/api/login`, thegoods
    )
    .then(res =>{
         console.log(res.data.token

            )
     localStorage.setItem('token', res.data.token)
        dispatch({
            type:LOGIN_SUCCESS,
            payload: res, 
            
        })
    })
    .catch(err =>{
        dispatch({
            type: LOGIN_FAILURE,
            payload: err

        })
    })
    
    
   
}
export const regSuccess = (thegoods) => dispatch =>{
    dispatch({type: REGISTER_START})

    return axios.post(
        `https://beeback.herokuapp.com/api/register`, thegoods
    )
    .then(res =>{
         console.log(res

            )
    //  localStorage.setItem('token', res.data.token)
        dispatch({
            type:REGISTER_SUCCESS,
            payload: res, 
            
        })
    })
    .catch(err =>{
        dispatch({
            type: REGISTER_FAILURE,
            payload: err

        })
    })
}


// export const getfriend = () => dispatch => {
//     dispatch({type: FETCH_FRIENDS_START})

//     axios.get(
//         'http://localhost:5000/api/friends',
//         {headers: {authorization:localStorage.getItem('token')}}
//     )
//     .then(res =>{
//         console.log(res)
//         dispatch({
//             type: FETCH_FRIENDS_SUCCESS,
//             payload: res.data
//         })
//     }
//     )
//     .catch(err =>{
     
//         dispatch ({
//             type: FETCH_FRIENDS_FAILURE,
//             payload: err
//         })
//     })
    
// }
// export const addfriend = (friend) => dispatch =>{
//     axios.post(
//         `http://localhost:5000/api/friends`, friend,
//         {headers: {authorization:localStorage.getItem('token')}}
//         .then(res =>{
//             dispatch({ 
//                 type: ADD_FRIEND,
//                 payload: res.data 
            
//             })
//         })
        

//     )
// }