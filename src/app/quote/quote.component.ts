import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quotes(1, '“You have to be secure in yourself to engage and challenge the mainstream.”', `Anne Poelina`, 0,0, `Robert`, new Date(2021, 6, 20)),
    new Quotes(2, '“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”', `Winston Churchill
    `, 0,0, `Otieno`, new Date(2021, 6, 20)),

  ];
  deleteQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }

  highlighter(index){
    const check = this.quotes[index].upvote;
    if(this.quotes.length > 0) {
      const votes = [];
     this.quotes.forEach(quote => votes.push(quote.upvote));
     if (check === Math.max(...votes)) {
      return true;
    }
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
