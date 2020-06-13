import { createSlice } from "@reduxjs/toolkit";
import { Article } from "model";

interface StateProp {
  value: Article | undefined
  isLoading: boolean
}

const state: StateProp = {
  value: undefined,
  isLoading: false
}

export const articleSlice = createSlice({
  name: 'article',
  initialState: state,
  reducers: {
    onLoading: state => {
      state.isLoading = true;
    },
    offLoading: state => {
      state.isLoading = false;
    },
    fetch: (state, action) => {
      state.value = action.payload.data;
    }
  }
});

export const articleReducer = articleSlice.reducer;
export const { onLoading, offLoading, fetch } = articleSlice.actions;
