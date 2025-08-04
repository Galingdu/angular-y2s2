import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../models/product';
declare const Swal: any;

@Component({
  selector: 'app-add-to-card',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './add-to-card.html',
  styleUrl: './add-to-card.css',
})
export class AddToCard {

  cardList: Product[] = [];
  totalOrders: number = 0;

  addToCart(item: Product) {
    this.cardList.push(item);
    this.totalOrders = this.cardList.length;
    item.cartCount++;
    // this.cardList.push(item);
    // console.log(this.cardList);
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
        this.products.forEach((product: any) => {
          product.cartCount = 0;
        });
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
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
  products: Product[] = [
    {
      id: 1,
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
      id: 4,
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
      id: 5,
      cartCount: 0,
      name: 'New Balance 550',
      price: 109.95,
      description: 'A basketball-inspired lifestyle shoe with vintage flair.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/326109-1200-1200?width=1200&height=1200&aspect=true',
      rating: 4.6,
    },
    {
      id: 2,
      cartCount: 0,
      name: 'Adidas Ultraboost Light',
      price: 159.99,
      description: 'Lightweight cushioning and energy return for a smooth run.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/326904-1200-1200?width=1200&height=1200&aspect=true',
      rating: 4.8,
    },
    {
      id: 3,
      cartCount: 0,
      name: 'Converse Chuck Taylor All Star',
      price: 59.99,
      description: 'An iconic canvas sneaker for casual everyday style.',
      image:
        'https://nikearprod.vtexassets.com/arquivos/ids/1362918-1200-1200?width=1200&height=1200&aspect=true',
      rating: 4.5,
    },

    {
      id: 4,
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
      id: 5,
      cartCount: 0,
      name: 'New Balance 550',
      price: 109.95,
      description: 'A basketball-inspired lifestyle shoe with vintage flair.',
      image:
        'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-2-600x600.png',
      rating: 4.6,
    },
    {
      id: 2,
      cartCount: 0,
      name: 'Adidas Ultraboost Light',
      price: 159.99,
      description: 'Lightweight cushioning and energy return for a smooth run.',
      image:
        'https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png',
      rating: 4.8,
    },
    {
      id: 3,
      cartCount: 0,
      name: 'Converse Chuck Taylor All Star',
      price: 59.99,
      description: 'An iconic canvas sneaker for casual everyday style.',
      image:
        'https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-11-600x600.png',
      rating: 4.5,
    },
    {
      id: 1,
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
