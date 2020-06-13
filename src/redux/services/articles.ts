import { onLoading, offLoading, fetch } from "redux/slices/articles";
import { Dispatch } from "@reduxjs/toolkit";
import { articles } from "constants/articles";

export const fetchArticles = () => (dispatch: Dispatch) => {
  dispatch(onLoading());

  (new Promise(resolve => {
    setTimeout(() => {
      dispatch(fetch({data: articles}));
      resolve();
    }, 300);
  })).then(() => dispatch(offLoading()));
}
