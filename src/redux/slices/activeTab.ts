import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActiveTab } from "model";

type StateType = { value: ActiveTab };
const initialState: StateType = { value: 'blog'};

export const activeTabSlice = createSlice({
  name: 'activeTab',
  initialState,
  reducers: {
    changeTab: (state, action: PayloadAction<ActiveTab>) => {
      state.value = action.payload;
    }
  }
});

export const activeTabReducer = activeTabSlice.reducer;
export const { changeTab } = activeTabSlice.actions;
