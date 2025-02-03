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
    },
    setChosenPeriod: (state, action) => {
      state.chosenPeriod = action.payload;
    },
    setChosenMetric: (state, action) => {
      state.chosenMetric = action.payload;
    },
    setChosenChartType: (state, action) => {
      state.chosenChartType = action.payload;
    }
  }

})

export const { setChosenOrdersSort } = accountSlice.actions;
export const { setChosenRankingSort } = accountSlice.actions;
export const { setChosenPeriod } = accountSlice.actions;
export const { setChosenMetric } = accountSlice.actions;
export const { setChosenChartType } = accountSlice.actions;
export default accountSlice.reducer
export const { toggle } = accountSlice.actions
