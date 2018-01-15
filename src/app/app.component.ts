import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article(
        'The Angular 2 screencast',
        'The easiest way to learn Angular 2!',
      ),
      new Article(
        'The Angular 3 screencast',
        'The easiest way to learn Angular 2!'
      ),
      new Article(
        'The Angular 4 screencast',
        'The easiest way to learn Angular 2!'
      ),
      new Article(
        'The Angular 5 screencast',
        'The easiest way to learn Angular 2!'
      )
   ];
  }
}
