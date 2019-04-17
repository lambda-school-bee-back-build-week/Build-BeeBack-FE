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
