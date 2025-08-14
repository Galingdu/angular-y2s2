import { Component } from '@angular/core';
import { Products } from '../Service/products';
import { Product } from '../models/product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { escapeRegExp } from '@angular/compiler';
declare const Swal: any;

@Component({
  selector: 'app-show-card-product-added',
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './show-card-product-added.html',
  styleUrl: './show-card-product-added.css',
})
export class ShowCardProductAdded {
  addedProducts: Product[] = [];
  products:Product[]=[]
  total:number=0
  totalAmount:number=0
  savePrice:number= 0
  delivery :number=0

  constructor(public cartService: Products) {
    this.addedProducts = this.cartService.getCardList();
    this.products = this.cartService.getProduct()
    this.handleTotal()
  }
  handleCardDelte(cardData: any) {
    // this.cartService.handleCardDelete(cardData)

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
        let findId = this.addedProducts.find(
          (fData) => fData.id == cardData.id
        );
        if (findId) {
          let deleteById = this.addedProducts.filter(
            (i) => i.id !== cardData.id
          );
          this.addedProducts = deleteById;
          this.handleTotal()
        }

         // Update product status in main product list
      let productIndex = this.products.findIndex(p => p.id === cardData.id);
      if (productIndex !== -1) {
        this.products[productIndex].status = false;
      }
        
        localStorage.setItem('cartList', JSON.stringify(this.addedProducts));
    
        // this.addedProducts=JSON.parse(localStorage.getItem('cartList')?? '[]')

        Swal.fire({
          title: 'Deleted!',
          text: 'Your cart has been cleared.',
          icon: 'success',
        });
      }
    });
  }

  handleDown(cartList: any) {
    let index: number = this.addedProducts.indexOf(cartList);
    if (cartList.qty > 1) {
      cartList.qty--;
      this.addedProducts[index] = cartList;
    }else{
        this.addedProducts.splice(index, 1);
        localStorage.setItem('cartList', JSON.stringify(this.addedProducts));
        let productIndex = this.products.findIndex(p=>p.id===cartList.id)
        if(productIndex !== -1){
          this.products[productIndex].status=false
        }
    
        // this.addedProducts=JSON.parse(localStorage.getItem('cartList')?? '[]')
    }
    this.handleTotal()
    localStorage.setItem('cartList', JSON.stringify(this.addedProducts));

  }

  handleUp(cartList: any) {
    cartList.qty++;
    let index: number = this.addedProducts.indexOf(cartList);
    this.addedProducts[index] = cartList;
    this.handleTotal()
    localStorage.setItem('cartList', JSON.stringify(this.addedProducts));

  }
  handleTotal(){
    this.total =0 ;
    this.totalAmount = 0;
  
    this.addedProducts.forEach(p=>{
      this.total = this.total + p.qty*p.price
    })
    
    if(this.total>1){
      this.delivery=2
    }
    else{
      this.delivery=0
    }
   if(this.total>=1){
    this.savePrice = this.total*0.10
     this.totalAmount = this.total - this.savePrice
   }else{
    this.savePrice=0
    this.totalAmount = this.total
   }
   this.cartService.getTotalAmount(this.totalAmount)
    
  }

  handlePay() {
  if (this.total > 0) { 
    console.log("succes")

  }else{
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      alert("No item selected");
    } else {
      Swal.fire("No item selected");
    }
  }
  
}
}
