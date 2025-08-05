import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  footerIsHover:boolean=false;

  handleFooterHover(status:boolean){
    this.footerIsHover=status;

  }

}
