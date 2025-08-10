import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [Footer,Header,RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
