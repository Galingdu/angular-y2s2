import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../Service/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pay-with-qr',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './pay-with-qr.html',
  styleUrl: './pay-with-qr.css'
})
export class PayWithQr {
  constructor(public totalService:Products){
    this.totalAmount= this.totalService.getTotalFromService();
    console.log("total from qr",this.totalAmount)
  }
  totalAmount:number=0

}
