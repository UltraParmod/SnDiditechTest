import { configureStore } from '@reduxjs/toolkit'
import FoodCountSlice from '../Redux/Slice/FoodCountSlice'

export const store = configureStore({
  reducer:{
    FoodCount:FoodCountSlice
  } ,
})