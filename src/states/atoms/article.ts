import { atom } from "recoil";
import { Article } from "model";

export const article = atom<Article|null>({
  key: 'article',
  default: null,
});
