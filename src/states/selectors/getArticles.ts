import { selector, useSetRecoilState } from "recoil";
import { articles } from "states/atoms/articles";
import { ArticleRepository } from "repositories/articles";

export const getArticles = selector({
  key: 'getArticles',
  get: () => {
    const articlesValue = (new ArticleRepository()).findAll();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setArticles = useSetRecoilState(articles);
    setArticles(articlesValue);

    return articlesValue;
  }
});
