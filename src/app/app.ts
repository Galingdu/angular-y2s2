import { CommonModule, JsonPipe } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToCard } from './add-to-card/add-to-card';
import { Header } from "./header/header";
import { Slider } from './slider/slider';
import { Footer } from "./footer/footer";
import { Homepage } from "./homepage/homepage";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
