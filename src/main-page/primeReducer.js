import { createSlice } from "@reduxjs/toolkit";

export const primeSlice = createSlice({
  name: "primeSlice",
  initialState: { primeValue: 4000 },
  reducers: {
    setValueForCheck: (state, action) => {
      state.primeValue = action.payload;
    },
  },
});

export const { setValueForCheck } = primeSlice.actions;
export const primeReducer = primeSlice.reducer;
