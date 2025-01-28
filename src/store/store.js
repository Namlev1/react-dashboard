import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './accountSlice.js'

const store = configureStore({
  reducer: {
    accountSlice: accountReducer
  }
})

export default store
