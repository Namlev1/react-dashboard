import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState.js'
import secondState from './secondState.js'

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    toggle: (state) => {
      return state.accountId === 1 ? secondState : initialState
    },
    setChosenOrdersSort: (state, action) => {
      state.chosenOrdersSort = action.payload;
    },
    setChosenRankingSort: (state, action) => {
      state.chosenRankingSort = action.payload;
    }
  }

})

export const { setChosenOrdersSort } = accountSlice.actions;

export const { setChosenRankingSort } = accountSlice.actions;
export default accountSlice.reducer
export const { toggle } = accountSlice.actions
