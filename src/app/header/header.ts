import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { flush } from '@angular/core/testing';

declare const Swal: any;

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass,RouterLinkActive],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
    // this.chooseLocation = true;
  }

  showModal = false;


  menuIsHover=false;
  handleMenuHover(status:boolean){
    this.menuIsHover=status;

  }

  iconIsHover:boolean=false
  handleIconHover(status:boolean){
    this.iconIsHover=status;
  }

  ngOnInit(){
    const modalShown = localStorage.getItem('modalShown')

    if(!modalShown){
        setTimeout(()=>{
          this.showModal=true;
        },500)
    }
    
  }

  hanleLocationChoose() {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  //  chooseLocation:boolean = false;

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
         localStorage.setItem('modalShown', 'true');
      }, 1000);
    } else {
      Swal.fire({
        html:
          '<p style="font-size:16px; margin:0;">Your Location is: ' +
          location.country +
          ', ' +
          location.cities +
          '</p>',
        position: 'top',
        background: 'rgba(255, 255, 255, 0.95)',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        this.showModal = false;
         localStorage.setItem('modalShown', 'true');
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
  AsiaLocationList: { country: string; cities: string ;id:number}[] = [
    { country: 'Cambodia', cities: 'Phnom Penh' ,id:1},
    { country: 'Vietnam', cities: 'Hanoi' ,id:2},
    { country: 'Japan', cities: 'Tokyo',id:3 },
    { country: 'China', cities: 'Beijing' ,id:24},
    { country: 'South Korea', cities: 'Seoul',id:5 },
    { country: 'Thailand', cities: 'Bangkok' ,id:6},
    { country: 'India', cities: 'Mumbai',id:7 },
    { country: 'Singapore', cities: 'Singapore',id:8 },
    { country: 'Malaysia', cities: 'Kuala Lumpur' ,id:9},
    { country: 'Indonesia', cities: 'Jakarta' ,id:10},
    { country: 'Vietnam', cities: 'Hanoi',id:11 },
    { country: 'Philippines', cities: 'Manila',id:12 },
  ];
}
