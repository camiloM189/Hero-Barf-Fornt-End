
import {  configureStore } from '@reduxjs/toolkit'
import { correoSlice } from './correo'




export const store = configureStore({
    reducer: {
        corre:correoSlice.reducer
    },
    
  
  })