import { Component,ViewChild,ElementRef } from '@angular/core';
import { Shoes } from '../models/shoes';

@Component({
  selector: 'app-shoese-show',
  imports: [],
  templateUrl: './shoese-show.html',
  styleUrl: './shoese-show.css'
})
export class ShoeseShow {
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scrollLeft(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight(): void {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  shoesesList:Shoes[]=[
    {
      id: 1,
      name: 'Jordan',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/e8bf61fc-489b-425a-ba40-839f3b80e397___4260a001faf97609d94c13684f34208a.jpg'
    },
    {
      id: 2,
      name: 'Air Max',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/7cd50b01-ac08-494c-a8a6-731e53f34d48___0d04e141e04364509590799608e4a434.jpg'
    },
    {
      id: 3,
      name: 'Dunk',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/de1ad668-b03c-4cea-b173-1ce3d2984743___69b66e0de39887c39c821fd4d141f10e.jpg'
    },
    {
      id: 4,
      name: 'Air Force',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9142b0f6-35d3-45bb-8a12-f16a2cf4681d___e4f45870707b3b6d094cf3236a31d9eb.jpg'
    },
    {
      id: 5,
      name: 'Air Jordan',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/e8bf61fc-489b-425a-ba40-839f3b80e397___4260a001faf97609d94c13684f34208a.jpg'
    },
    {
      id: 6,
      name: 'Jordan',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/e8bf61fc-489b-425a-ba40-839f3b80e397___4260a001faf97609d94c13684f34208a.jpg'
    },
    {
      id: 7,
      name: 'Air Max',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/7cd50b01-ac08-494c-a8a6-731e53f34d48___0d04e141e04364509590799608e4a434.jpg'
    },
    {
      id: 8,
      name: 'Dunk',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/de1ad668-b03c-4cea-b173-1ce3d2984743___69b66e0de39887c39c821fd4d141f10e.jpg'
    },
    {
      id: 9,
      name: 'Air Force',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/9142b0f6-35d3-45bb-8a12-f16a2cf4681d___e4f45870707b3b6d094cf3236a31d9eb.jpg'
    },
    {
      id: 10,
      name: 'Air Jordan',
      imageUrl: 'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/e8bf61fc-489b-425a-ba40-839f3b80e397___4260a001faf97609d94c13684f34208a.jpg'
    }
  ];

}
