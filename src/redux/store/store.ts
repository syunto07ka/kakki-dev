import { configureStore } from '@reduxjs/toolkit';
import { articlesReducer } from 'redux/reducers/articles';

export const store =  configureStore({
  reducer: {
    articles: articlesReducer
  }
});

export type rootState = ReturnType<typeof store.getState>;
