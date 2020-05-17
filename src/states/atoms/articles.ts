import { atom } from "recoil";
import { Article } from "model";

export const articles = atom<Article[]>({
  key: 'articles',
  default: [],
});
