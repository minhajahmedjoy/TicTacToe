import React from 'react';
const initialState ={sendCorrectPassword:"PASSWORD",sendCorrectName:"DEFAULT", age:20}
const UserReducer = (store=initialState,action) =>
{
    if(action.type==="UPDATE_NAME")
    {
        return {
        ...store,
        name: action.payload
        }
    }
    if(action.type==="SEND_DETAILS")
    {
        return {
            ...store,
            sendCorrectName: action.payload.sendCorrectName,
            sendCorrectPassword: action.payload.sendCorrectPassword
        }
    }
    return {...store}
}
export default UserReducer;