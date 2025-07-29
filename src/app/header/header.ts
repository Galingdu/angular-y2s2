import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from "../footer/footer";
import { Brand } from "../brand/brand";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet, Footer, Brand],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

}
 