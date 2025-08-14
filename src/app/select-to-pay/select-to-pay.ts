import { CurrencyPipe, NgClass, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Products } from '../Service/products';

@Component({
  selector: 'app-select-to-pay',
  imports: [RouterLink,NgClass,CurrencyPipe],
  templateUrl: './select-to-pay.html',
  styleUrl: './select-to-pay.css'
})
export class SelectToPay {
  constructor(public totalAmountService:Products){
    this.totalAmount=this.totalAmountService.getTotalFromService()

  }
  totalAmount:number=0
  
  isCheck = false
  selectedMethod: string = '';

  selectMethod(method: string) {
    this.selectedMethod = method;
    console.log(this.selectedMethod)
  }
  
  handleChek(){
    this.isCheck =! this.isCheck
  }

}
