import { onLoading, offLoading, fetch } from "redux/slices/articles";
import { Dispatch } from "@reduxjs/toolkit";
import { articles } from "constants/articles";

export const fetchArticles = () => async (dispatch: Dispatch) => {
  dispatch(onLoading());

  try {
    const data = await fetchHoge(dispatch);
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  dispatch(offLoading());
}

const fetchHoge = (dispatch: Dispatch) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        dispatch(fetch({ data: articles }));
        // reject('Error !');
        resolve(articles);
    }, 3000);
  });
}
