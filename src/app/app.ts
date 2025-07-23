import { CommonModule, JsonPipe } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToCard } from './add-to-card/add-to-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,AddToCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products:any = [
  {
    name: "Air Zoom Pegasus",
    price: 129.99,
    description: "A comfortable, responsive running shoe built for everyday miles.",
    image: "https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Cutout.png",
    rating: 4.5
  },
  {
    name: "Adidas Ultraboost Light",
    price: 159.99,
    description: "Lightweight cushioning and energy return for a smooth run.",
    image: "https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png",
    rating: 4.8
  },
  {
    name: "Converse Chuck Taylor All Star",
    price: 59.99,
    description: "An iconic canvas sneaker for casual everyday style.",
    image: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-11-600x600.png",
    rating: 4.5
  },
  {
    name: "Puma RS-X³ Puzzle",
    price: 110.00,
    description: "Bold, retro-inspired sneaker with exaggerated design elements.",
    image: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_-600x600.png",
    rating: 4.4
  },
  {
    name: "New Balance 550",
    price: 109.95,
    description: "A basketball-inspired lifestyle shoe with vintage flair.",
    image: "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-2-600x600.png",
    rating: 4.6
  }
];
}
