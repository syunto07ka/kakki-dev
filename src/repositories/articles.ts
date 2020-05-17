import { Article } from "model";
import { Start } from "constants/descriptions/Start";

export class ArticleRepository {
  findAll() {
    return articles
  }
}

export const articles: Article[] = [
  {
    id: 1,
    title: '個人ブログ始めてみました',
    date: '2020年5月17日',
    description: Start,
  }
];
