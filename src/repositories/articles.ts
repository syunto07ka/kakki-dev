import { Article } from "model";

export class ArticleRepository {
  findAll() {
    return articles
  }
}

const articles: Article[] = [
  {
    id: 1,
    title: 'ブログ始めました'
  }
];
