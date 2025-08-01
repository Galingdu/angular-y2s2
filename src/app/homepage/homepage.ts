import { Component } from '@angular/core';
import { Brand } from "../brand/brand";
import { AddToCard } from "../add-to-card/add-to-card";
import { SelectLocation } from "../select-location/select-location";
import { HighlightImage } from "../highlight-image/highlight-image";

@Component({
  selector: 'app-homepage',
  imports: [Brand, AddToCard, SelectLocation, HighlightImage],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
