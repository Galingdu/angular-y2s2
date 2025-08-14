import { Component,ElementRef,ViewChild } from '@angular/core';
import { DrinkService } from '../Service/drink-service';

@Component({
  selector: 'app-card-drink',
  imports: [],
  templateUrl: './card-drink.html',
  styleUrl: './card-drink.css'
})
export class CardDrink {

  allDrink: any[] = [];
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  constructor(private drinkService: DrinkService) {}

  ngOnInit() {
    this.drinkService.getAllDrink().then(data => {
      this.allDrink = data;
      console.log("Drinks loaded:", this.allDrink);
    });
  }

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }


}
