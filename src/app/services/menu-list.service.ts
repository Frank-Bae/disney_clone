import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor() { }

  menuList = [
    {
      option: 'DISNEY+'
    },
    {
      option: 'PARKS & TRAVEL'
    },
    {
      option: 'MOVIES'
    },
    {
      option: 'SHOP'
    },
    {
      option: 'MORE'
    }
  ]
}
