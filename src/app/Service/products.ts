import { Injectable } from '@angular/core';
import { Product } from '../models/product';
declare const Swal: any;
@Injectable({
  providedIn: 'root',
})
export class Products {
  private cartList: Product[] = [];

  constructor() {
    this.cartList = JSON.parse(localStorage.getItem('cartList') ?? '[]');
    console.log(this.cartList);
  }
  getCardList() {
    return this.cartList;
  }
  addToCart(item: Product) {
    this.cartList = JSON.parse(localStorage.getItem('cartList') ?? '[]');
    item.qty = 1;
    item.cartCount++
    let isExist: any = this.cartList.find((i) => i.id == item.id);
    if (isExist) {
      isExist.qty++;
      let index: number = this.cartList.indexOf(isExist);
      this.cartList[index] = isExist;
    } else {
      this.cartList.push(item);
    }
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }

  getProduct() {
    return this.products;
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
        this.cartList = [];
        // this.products.forEach(product => product.cartCount = 0);
        localStorage.setItem('cartList', JSON.stringify([]));
        localStorage.setItem('itemCount', JSON.stringify(0));
        this.cartList = JSON.parse(localStorage.getItem('cartList') ?? '[]');

        Swal.fire({
          title: 'Deleted!',
          text: 'Your cart has been cleared.',
          icon: 'success',
        });
      }
    });
  }

  // handleCardDelete(cardData: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //   }).then((result: any) => {
  //     if (result.isConfirmed) {
  //       let findId = this.cartList.find((fData) => fData.id == cardData.id);
  //       if (findId) {
  //         let deleteById = this.cartList.filter((i) => i.id !== cardData.id);
  //         this.cartList = deleteById;
  //       }
  //       localStorage.setItem('cartList', JSON.stringify(this.cartList));
  //       // this.cartList=JSON.parse(localStorage.getItem('cartList')?? '[]')

  //       Swal.fire({
  //         title: 'Deleted!',
  //         text: 'Your cart has been cleared.',
  //         icon: 'success',
  //       });
  //     }
  //   });
  // }

  products: Product[] = [
    {
      id: 1,
      qty: 0,
      cartCount: 0,
      name: 'Nike Dri-fit',
      price: 129.99,
      description:
        'A comfortable, responsive running shoe built for everyday miles.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/317858-1000-1000?v=638128489049830000&width=1000&height=1000&aspect=true',
      rating: 4.5,
    },
    {
      id: 2,
      qty: 0,
      cartCount: 0,
      name: 'Puma RS-X³ Puzzle',
      price: 110.0,
      description:
        'Bold, retro-inspired sneaker with exaggerated design elements.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/1230957-1000-1000?v=638682210615030000&width=1000&height=1000&aspect=true',
      rating: 4.4,
    },
    {
      id: 3,
      qty: 0,
      cartCount: 0,
      name: 'New Balance 550',
      price: 109.95,
      description: 'A basketball-inspired lifestyle shoe with vintage flair.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/326109-1200-1200?width=1200&height=1200&aspect=true',
      rating: 4.6,
    },
    {
      id: 4,
      qty: 0,
      cartCount: 0,
      name: 'Adidas Ultraboost Light',
      price: 159.99,
      description: 'Lightweight cushioning and energy return for a smooth run.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/326904-1200-1200?width=1200&height=1200&aspect=true',
      rating: 4.8,
    },
    {
      id: 5,
      qty: 0,
      cartCount: 0,
      name: 'Converse Chuck Taylor All Star',
      price: 59.99,
      description: 'An iconic canvas sneaker for casual everyday style.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/1362918-1200-1200?width=1200&height=1200&aspect=true',
      rating: 4.5,
    },

    {
      id: 6,
      qty: 0,
      cartCount: 0,
      name: 'Puma RS-X³ Puzzle',
      price: 110.0,
      description:
        'Bold, retro-inspired sneaker with exaggerated design elements.',
      image:
        'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_-600x600.png',
      rating: 4.4,
    },
    {
      id: 7,
      qty: 0,
      cartCount: 0,
      name: 'New Balance 550',
      price: 109.95,
      description: 'A basketball-inspired lifestyle shoe with vintage flair.',
      image:
        'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-2-600x600.png',
      rating: 4.6,
    },
    {
      id: 8,
      qty: 0,
      cartCount: 0,
      name: 'Adidas Ultraboost Light',
      price: 159.99,
      description: 'Lightweight cushioning and energy return for a smooth run.',
      image:
        'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
      rating: 4.8,
    },
    {
      id: 9,
      qty: 0,
      cartCount: 0,
      name: 'Converse Chuck Taylor All Star',
      price: 59.99,
      description: 'An iconic canvas sneaker for casual everyday style.',
      image:
        'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-11-600x600.png',
      rating: 4.5,
    },
    {
      id: 10,
      qty: 0,
      cartCount: 0,
      name: 'Air Zoom Pegasus',
      price: 129.99,
      description:
        'A comfortable, responsive running shoe built for everyday miles.',
      image:
        'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-PNG-Cutout.png',
      rating: 4.5,
    },
  ];
}
