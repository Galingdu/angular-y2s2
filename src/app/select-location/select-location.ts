import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-location',
  imports: [NgIf],
  templateUrl: './select-location.html',
  styleUrl: './select-location.css'
})
export class SelectLocation {
   showModal = false;

  ngOnInit(): void {
    // Show modal on page refresh/load
    setTimeout(() => {
    this.showModal = true;
  }, 600); 
  }

  closeModal(): void {
    this.showModal = false;
  }

}
