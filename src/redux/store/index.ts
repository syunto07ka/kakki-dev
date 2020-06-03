import { configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from 'redux/slices/articles';
import { activeTabReducer } from 'redux/slices/activeTab';

export const store =  configureStore({
  reducer: {
    articles: articlesReducer,
    activeTab: activeTabReducer
  }
});

export type rootState = ReturnType<typeof store.getState>;
