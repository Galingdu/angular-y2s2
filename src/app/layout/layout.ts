import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Router, RouterOutlet } from '@angular/router';
import { StarCursor } from '../directives/star-cursor';

@Component({
  selector: 'app-layout',
  imports: [Footer,Header,RouterOutlet,StarCursor],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
