import { configureStore } from '@reduxjs/toolkit'
import HomeRedux from './Redux/HomeRedux'

export const store = configureStore({
  reducer: {
    reduxhome: HomeRedux,
  },
})