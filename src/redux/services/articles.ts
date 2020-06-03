import { onLoading, offLoading ,get } from "redux/slices/articles";
import { Dispatch } from "@reduxjs/toolkit";

export const fetch = () => (dispatch: Dispatch) => {
  dispatch(onLoading());

  (new Promise(resolve => {
    setTimeout(() => {
      dispatch(get({data: []}));
      resolve();
    }, 5000);
  })).then(() => dispatch(offLoading()));
}
