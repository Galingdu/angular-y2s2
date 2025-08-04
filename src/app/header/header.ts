import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

declare const Swal:any

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
 
   menuOpen:boolean = false;
   showModal = true;

   hanleLocationChoose(){

    this.showModal = true;
   }

     closeModal(): void {
    this.showModal = false;
  }
    
  //  chooseLocation:boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
  this.menuOpen = false;
  // this.chooseLocation = true;
}

 handleLocation(location: string | { country: string; cities: string }) {
    if (typeof location === 'string') {
      Swal.fire({
        html: `<p style="font-size:16px; margin:0;">Your Location is: ${location}</p>`,
        position: 'top',
        background: 'rgba(255, 255, 255, 0.95)',
        showConfirmButton: false,
        timer: 1500,
        
      });
      setTimeout(() => {
        this.showModal = false;
        //  localStorage.setItem('modalShown', 'true');
      }, 1000);
    } else {
      Swal.fire({
        html: '<p style="font-size:16px; margin:0;">Your Location is: ' + location.country + ', ' + location.cities + '</p>',
        position: 'top',
        background: 'rgba(255, 255, 255, 0.95)',
        showConfirmButton: false,
        timer: 1500,
        
      });
      setTimeout(() => {
        this.showModal = false;
        //  localStorage.setItem('modalShown', 'true');
      }, 1000);
    }
  }

    Working() {
    Swal.fire('Location is Fixing!');
  }

// openLocationModal(){
//   this.chooseLocation = true;
  
//   //  localStorage.setItem('modalShown', 'false');
// }

// ngOnInit(): void {
//     const modalShown = localStorage.getItem('modalShown');

//     if (!modalShown) {
//       // Show modal only if it hasn’t been shown before
//       setTimeout(() => {
//         this.chooseLocation = true;
//       }, 600);
//     }
//   }
  EnglandLocationList: string[] = [
    'London',
    'Manchester',
    'Birmingham',
    'Leeds',
    'Liverpool',
    'Manchester',
    'Sheffield',
    'Bradford',
    'Coventry',
    'Bristol',
    'Stoke-on-Trent',
  ];
  ScotlandLocationList: string[] = [
    'Edinburgh',
    'Glasgow',
    'Aberdeen',
    'Dundee',
    'Inverness',
    'Perth',
    'Stirling',
    'Falkirk',
    'Ayr',
    'Dumfries',
  ];
  AsiaLocationList: { country: string; cities: string }[] = [
    { country: 'Cambodia', cities: 'Phnom Penh' },
    { country: 'Vietnam', cities: 'Hanoi' },
    { country: 'Japan', cities: 'Tokyo' },
    { country: 'China', cities: 'Beijing' },
    { country: 'South Korea', cities: 'Seoul' },
    { country: 'Thailand', cities: 'Bangkok' },
    { country: 'India', cities: 'Mumbai' },
    { country: 'Singapore', cities: 'Singapore' },
    { country: 'Malaysia', cities: 'Kuala Lumpur' },
    { country: 'Indonesia', cities: 'Jakarta' },
    { country: 'Vietnam', cities: 'Hanoi' },
    { country: 'Philippines', cities: 'Manila' },
  ];
  
}
 