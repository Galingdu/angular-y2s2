import { Component } from '@angular/core';
import { Brand } from "../brand/brand";
import { AddToCard } from "../add-to-card/add-to-card";
import { SelectLocation } from "../select-location/select-location";
import { HighlightImage } from "../highlight-image/highlight-image";
import { ShoeseShow } from "../shoese-show/shoese-show";
import { CardDrink } from "../card-drink/card-drink";

@Component({
  selector: 'app-homepage',
  imports: [Brand, AddToCard, HighlightImage, ShoeseShow, CardDrink],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
