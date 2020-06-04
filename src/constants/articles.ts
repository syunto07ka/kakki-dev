import { Article } from "model";
import { Start } from "constants/blogs/Start";
import AddImplementes from "constants/blogs/AddImplementes.mdx";
import Moteamasu from "constants/blogs/Moteamasu.mdx";

export const articles: Article[] = [
  {
    id: 3,
    title: 'モテアマス三軒茶屋に来ました',
    date: '2020年6月3日',
    description: Moteamasu,
  },
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
