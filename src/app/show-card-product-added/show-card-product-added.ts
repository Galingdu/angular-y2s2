import { Component } from '@angular/core';
import { Products } from '../Service/products';
import { Product } from '../models/product';
declare const Swal: any;

@Component({
  selector: 'app-show-card-product-added',
  imports: [],
  templateUrl: './show-card-product-added.html',
  styleUrl: './show-card-product-added.css',
})
export class ShowCardProductAdded {
  addedProducts: Product[] = [];
  constructor(public cartService: Products) {
    this.addedProducts = this.cartService.getCardList();
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
        }
        localStorage.setItem('cartList', JSON.stringify(this.addedProducts));
        localStorage.setItem('cardList2', JSON.stringify(this.addedProducts));
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
        localStorage.setItem('cardList2', JSON.stringify(this.addedProducts));
        // this.addedProducts=JSON.parse(localStorage.getItem('cartList')?? '[]')
    }
    localStorage.setItem('cartList', JSON.stringify(this.addedProducts));
    localStorage.setItem('cardList2', JSON.stringify(this.addedProducts));
  }

  handleUp(cartList: any) {
    cartList.qty++;
    let index: number = this.addedProducts.indexOf(cartList);
    this.addedProducts[index] = cartList;
    localStorage.setItem('cartList', JSON.stringify(this.addedProducts));
    localStorage.setItem('cardList2', JSON.stringify(this.addedProducts));
  }
}
