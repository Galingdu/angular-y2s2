import { Injectable } from '@angular/core';
declare const axios:any

@Injectable({
  providedIn: 'root'
})
export class DrinkService {


   drinkApiUrl: string = 'https://68a3e2ccc123272fb9b0a6dd.mockapi.io/chenglyheng/api/shoes/shoes';

  getAllDrink(): Promise<any[]> {
    return axios.get(this.drinkApiUrl)
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        console.error(error);
        return [];
      });
  }
  
}
