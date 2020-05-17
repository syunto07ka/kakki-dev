import { selector, useSetRecoilState } from "recoil";
import { articles } from "repositories/articles";
import { article } from "states/atoms/article";

export const getArticle = selector({
  key: 'getArticle',
  get: () => {
    // const articleValue = (new ArticleRepository()).get(1);
    const articleValue = articles[0]; // FIXME: 動的に

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const setArticle = useSetRecoilState(article);
    setArticle(articleValue);

    return articleValue;
  }
});
