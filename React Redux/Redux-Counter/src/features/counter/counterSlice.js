import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increseCount: (state) => {
      state.count += 1;
    },

    decreseCount: (state) => {
      state.count -= 1;
    },
  },
});

export const { increseCount, decreseCount } = counterSlice.actions;

export default counterSlice.reducer;

// export const selectCount = (store) => {
//   return store.counter.count;
// };
