import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companys: [],
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setCompanys: (state, action) => {
      state.companys = action.payload;
    },
    // addEvent: (state, action) => {
    //   state.events.push(action.payload);
    // },
    // updateEvent: (state, action) => {
    //   const { id, updatedEvent } = action.payload;
    //   const index = state.events.findIndex(event => event.id === id);
    //   if (index !== -1) {
    //     state.events[index] = updatedEvent;
    //   }
    // },
    // removeEvent: (state, action) => {
    //   state.events = state.events.filter(event => event.id !== action.payload);
    // },
  },
});

export const { setCompanys } = companySlice.actions;
export default companySlice.reducer;
