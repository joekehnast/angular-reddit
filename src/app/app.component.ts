import { Component } from '@angular/core';
import { Article} from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    // this.articles.push(new Article("Angular 2", "http://angular.io", 10));
    // this.articles.push(new Article("Eagles Encyclopedia", "http://www.philadelphiaeagles.com", 40));
    // this.articles.push(new Article("NFL Today", "http://www.nfl.com/standings", 400));
    this.articles = [
      new Article("ESPN", "http://www.espn.com", 10),
      new Article("Eagles Website", "http://www.philadelphiaeagles.com", 40),
      new Article("NFL Standings", "http://www.nfl.com/standings", 400)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) : boolean {
    console.log(`Adding article title": ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    return false;
  }

  sortedArticles() : Article[] {
      return this.articles.sort((a: Article, b: Article) => b.votes - a.votes); 
  }

}
