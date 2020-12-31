import { Article } from "model";
import { Start } from "constants/blogs/Start";
import AddImplementes from "constants/blogs/AddImplementes.mdx";
import Moteamasu from "constants/blogs/Moteamasu.mdx";
import Saddness from "constants/blogs/Sadness.mdx";
import WhyAmICording from "constants/blogs/WhyAmICording.mdx";

export const articles: Article[] = [
  {
    id: 5,
    title: '"人に寄り添うコードを書く"',
    date: '2020-06-14',
    description: WhyAmICording,
    tags: [
      {
        name: 'programming',
        displayName: 'プログラミング',
        labelColor: '#000000',
        letterColor: '#ffffff',
      },
      {
        name: 'poemy',
        displayName: 'ポエム',
        labelColor: '#000000',
        letterColor: '#ffffff',
      },
    ],
  },
  {
    id: 4,
    title: 'モテアマスから帰ってきて',
    date: '2020-06-08',
    description: Saddness,
    tags: [
      {
        name: 'share-house',
        displayName: 'シェアハウス',
        labelColor: '#000000',
        letterColor: '#ffffff',
      },
    ],
  },
  {
    id: 3,
    title: 'モテアマス三軒茶屋に来ました',
    date: '2020-06-03',
    description: Moteamasu,
    tags: [
      {
        name: 'share-house',
        displayName: 'シェアハウス',
        labelColor: '#000000',
        letterColor: '#ffffff',
      },
    ],
  },
  {
    id: 2,
    title: 'ちょっと改造しました',
    date: '2020-05-26',
    description: AddImplementes,
    tags: [
      {
        name: 'programming',
        displayName: 'プログラミング',
        labelColor: '#000000',
        letterColor: '#ffffff',
      },
    ],
  },
  {
    id: 1,
    title: '個人ブログ始めてみました',
    date: '2020-05-17',
    description: Start,
    tags: [
      {
        name: 'programming',
        displayName: 'プログラミング',
        labelColor: '#000000',
        letterColor: '#ffffff',
      },
    ],
  }
];
