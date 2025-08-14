import { Injectable } from '@angular/core';
declare const axios:any

@Injectable({
  providedIn: 'root'
})
export class DrinkService {


   drinkApiUrl: string = 'https://sv-gen-api.bczin2zin2takeo.us/api/product';

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
