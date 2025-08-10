  import { CommonModule, CurrencyPipe } from '@angular/common';
  import { Component, Input } from '@angular/core';
  import { Product } from '../models/product';
  import { Products } from '../Service/products';
  import { RouterLink } from '@angular/router';
  import { JsonpInterceptor } from '@angular/common/http';
  declare const Swal: any;

  @Component({
    selector: 'app-add-to-card',
    imports: [CurrencyPipe, CommonModule,RouterLink],
    templateUrl: './add-to-card.html',
    styleUrl: './add-to-card.css',
  })
  export class AddToCard {

    constructor(public productService:Products){
      this.products=this.productService.getProduct()
      this.cardList = JSON.parse(localStorage.getItem('cartList') ?? '[]');
      
    }
    products: Product[] = [];
    cardList: Product[] = [];
    totalOrders: number = 0; 

ngOnInit() {
  this.cardList = JSON.parse(localStorage.getItem('cartList') ?? '[]');
  // this.cardList = JSON.parse(localStorage.getItem('cardList2') ?? '[]');

  this.totalOrders = this.cardList.length;
}

addToCart(item: Product) {
  this.productService.addToCart(item);
  this.cardList = JSON.parse(localStorage.getItem('cartList') ?? '[]');
  this.totalOrders = this.cardList.length;
  
}

handleClear() {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result: any) => {
    if (result.isConfirmed) {
      this.cardList = [];
      this.totalOrders = 0;
      this.products.forEach(product => product.cartCount = 0);
      localStorage.setItem('cardList2', JSON.stringify([]));
      localStorage.setItem('cartList', JSON.stringify([]));
      localStorage.setItem('itemCount', JSON.stringify(0));
      this.productService.handleClear()

      Swal.fire({
        title: 'Deleted!',
        text: 'Your cart has been cleared.',
        icon: 'success',
      });
    }
  });
}

 photoClicked(product: Product) {
    Swal.fire({
      title: product.name,
      text: product.description,
      imageUrl: product.image,
      imageWidth: 200,
      imageHeight: 200,
      confirmButtonText: 'Close',
    });
  }


  }
