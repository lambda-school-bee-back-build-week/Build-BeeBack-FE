import axios from 'axios'
 
export const  BEE_ALL_START = 'BEE_YEAR_START'
export const  BEE_ALL_SUCCESS = 'BEE_YEAR_SUCCESS'
export const BEE_ALL_FAILURE = 'BEE_YEAR_FAILURE' 
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const  LOGIN_FETCHING ='LOGIN_FETCHING'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCESS'
export const REGISTER_FAILURE= 'REGISTER_START'
export const CHARTDATA_START = 'CHARTDATA_START'
export const CHARTDATA_SUCCESS = 'CHARTDATA_SUCCESS'
export const CHARTDATA_END = 'CHARTDATA_END'
export const UPDATE_START = 'UPDATE_START'
export const UPDATE_SUCCESS = "UPDATE_SUCCESS"
export const UPDATE_FAILURE= "UPDATE_FAIL"
export const DELETE_START = "DELETE_START"
export const DELETE_SUCCESS = "DELETE_SUCCESS"
export const DELETE_FAILURE = "DELETE_FAIL"


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
export const regSuccess = (goods) => dispatch =>{
    dispatch({type: REGISTER_START})

    return axios.post(
        `https://beeback.herokuapp.com/api/register`, goods
    )
    .then(res =>{
         console.log(res

            )
     localStorage.setItem('token', res.data.token)
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


export const getDataAll = (bee) => dispatch => {
    dispatch({type: BEE_ALL_START})

    axios.get(
        'https://beeback.herokuapp.com/api/neonic2',bee,
        {headers: {authorization:localStorage.getItem('token')}}
    )
    .then(res =>{
        console.log(res.data)
        dispatch({
            type: BEE_ALL_SUCCESS,
            payload: res.data
        })
    }
    )
    .catch(err =>{
     
        dispatch ({
            type: BEE_ALL_FAILURE,
            payload: err
        })
    })
    
}

export const chartingData = () => dispatch =>{
        dispatch({ type : CHARTDATA_START})
    axios.get(`https://beeback.herokuapp.com/api/state-charting`,
    {headers: {authorization:localStorage.getItem('token')}})

    .then(res => {
        console.log(res.data)
        dispatch({
            type: CHARTDATA_SUCCESS,
            payload: res.data
        })
    })
    .catch(err =>{
        dispatch({
            type: CHARTDATA_END,
            payload:err
        })
    })
        
}