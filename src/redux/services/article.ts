import { onLoading, offLoading, fetch } from "redux/slices/article";
import { Dispatch } from "@reduxjs/toolkit";
import { articles } from "constants/articles";
import { Article } from "model";

export const fetchArticle = (articleId: number) => (dispatch: Dispatch) => {
  dispatch(onLoading());
  const article: Article | undefined = articles.find(article => article.id === Number(articleId));

  (new Promise(resolve => {
    setTimeout(() => {
      dispatch(fetch({data: article}));
      resolve();
    }, 300);
  })).then(() => dispatch(offLoading()));
}
