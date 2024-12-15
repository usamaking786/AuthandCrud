import {configureStore} from "@reduxjs/toolkit"
import todoReducer from './features/todoSlice.js'
import authReducer from './features/authSlice.js'

export const store = configureStore({
    reducer :{
        todo : todoReducer,
        auth : authReducer
    }
})