import { Article } from "model";
import { Start } from "constants/blogs/Start";
import AddImplementes from "constants/blogs/AddImplementes.mdx";
import Moteamasu from "constants/blogs/Moteamasu.mdx";
import Saddness from "constants/blogs/Sadness.mdx";

export const articles: Article[] = [
  {
    id: 4,
    title: 'モテアマスから帰ってきて',
    date: '2020-06-08',
    description: Saddness,
  },
  {
    id: 3,
    title: 'モテアマス三軒茶屋に来ました',
    date: '2020-06-03',
    description: Moteamasu,
  },
  {
    id: 2,
    title: 'ちょっと改造しました',
    date: '2020-05-26',
    description: AddImplementes,
  },
  {
    id: 1,
    title: '個人ブログ始めてみました',
    date: '2020-05-17',
    description: Start,
  }
];
