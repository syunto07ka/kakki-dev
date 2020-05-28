import { createSlice } from "@reduxjs/toolkit";

export const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    value: [],
    isLoading: false,
  },
  reducers: {
    onLoading: state => {
      state.isLoading = true;
    },
    offLoading: state => {
      state.isLoading = false;
    },
    get: (state, action) => {
      state.value = action.payload.data;
    }
  }
});
