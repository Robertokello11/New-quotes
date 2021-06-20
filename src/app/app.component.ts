import { Quotes, } from './quotes'
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  quotes = [
    new Quotes(1, 'You have to be secure in yourself to engage and challenge the mainstream.', `Anne Poelina`, 0,0, `Robert`, new Date(2021, 6, 20)),
  ]

}
