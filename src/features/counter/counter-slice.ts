// DUCKS pattern
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // it's okay to do this because immer makes it mutable
    // under the hood
    incremented(state: { value: number }) {
      state.value++;
    },
    amountAdded(state: { value: number }, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    // decrement
  },
});

export const { incremented, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;
