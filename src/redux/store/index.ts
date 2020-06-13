import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { articlesReducer } from 'redux/slices/articles';
import { activeTabReducer } from 'redux/slices/activeTab';
import { articleReducer } from 'redux/slices/article';

export const store =  configureStore({
  reducer: {
    articles: articlesReducer,
    activeTab: activeTabReducer,
    article: articleReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export type rootState = ReturnType<typeof store.getState>;
