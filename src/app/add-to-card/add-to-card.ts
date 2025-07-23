import { CurrencyPipe } from '@angular/common';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-add-to-card',
  imports: [CurrencyPipe],
  templateUrl: './add-to-card.html',
  styleUrl: './add-to-card.css'
})
export class AddToCard {
  @Input() product: any;
}
