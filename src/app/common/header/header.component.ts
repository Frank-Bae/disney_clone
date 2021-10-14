import { Component, OnInit } from '@angular/core';
import { MenuListService } from 'src/app/services/menu-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  test = [1, 2, 3]

  constructor(public menuListService: MenuListService) {}

  ngOnInit(): void {
    console.log('menulist', this.menuListService)
  }
}
