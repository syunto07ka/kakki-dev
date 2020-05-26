import { Article } from "model";
import { Start } from "constants/blogs/Start";
import AddImplementes from "constants/blogs/AddImplementes.mdx";

export const articles: Article[] = [
  {
    id: 2,
    title: 'ちょっと改造しました',
    date: '2020年5月26日',
    description: AddImplementes,
  },
  {
    id: 1,
    title: '個人ブログ始めてみました',
    date: '2020年5月17日',
    description: Start,
  }
];
