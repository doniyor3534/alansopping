import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ismodal: false,
  data:[],
  carddata:[]
}

export const counterSlice = createSlice({
  name: 'reduxhome',
  initialState,
  reducers: {
    openmodal: (state,action) => {
      state.ismodal = action.payload
    },
    closemodal: (state,action) => {
      state.ismodal = action.payload
    },
    datafun: (state,action) => {
      state.data = action.payload
    },
    addtocard: (state,action) => {
      state.carddata = [...state.carddata,action.payload]
    },
    addtocardClear: (state) => {
      state.carddata = []
    },
    
}
})

// Action creators are generated for each case reducer function
export const { openmodal, closemodal,datafun,addtocard,addtocardClear } = counterSlice.actions

export default counterSlice.reducer