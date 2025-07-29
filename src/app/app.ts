import { CommonModule, JsonPipe } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddToCard } from './add-to-card/add-to-card';
import { Header } from "./header/header";
import { Slider } from './slider/slider';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
