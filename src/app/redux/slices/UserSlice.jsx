import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
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

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
