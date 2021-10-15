import { Component, OnInit, HostListener } from '@angular/core';
import { MenuListService } from 'src/app/services/menu-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public getScreenWidth: any;
  public getScreenHeight: any;
  originalList = [
    {
      option: 'DISNEY+',
    },
    {
      option: 'PARKS & TRAVEL',
    },
    {
      option: 'MOVIES',
    },
    {
      option: 'SHOP',
    },
    {
      option: 'MORE',
    },
  ];
  displayMenuList = [
    {
      option: 'DISNEY+',
    },
    {
      option: 'PARKS & TRAVEL',
    },
    {
      option: 'MOVIES',
    },
    {
      option: 'SHOP',
    },
    {
      option: 'MORE',
    },
  ];

  constructor(public menuListService: MenuListService) {}

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    this.onWindowResize()
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    if (this.getScreenWidth < 823) {
      this.displayMenuList = [
        {
          option: 'DISNEY+',
        },
        {
          option: 'MORE',
        },
      ];
    }
    else if (this.getScreenWidth < 919) {
      this.displayMenuList = [
        {
          option: 'DISNEY+',
        },
        {
          option: 'PARKS & TRAVEL',
        },
        {
          option: 'MORE',
        },
      ];
    } else if (this.getScreenWidth < 1000) {
      this.displayMenuList = [
        {
          option: 'DISNEY+',
        },
        {
          option: 'PARKS & TRAVEL',
        },
        {
          option: 'MOVIES',
        },
        {
          option: 'MORE',
        },
      ]
    } else if (this.getScreenWidth > 1000) {
      this.displayMenuList = [
        {
          option: 'DISNEY+',
        },
        {
          option: 'PARKS & TRAVEL',
        },
        {
          option: 'MOVIES',
        },
        {
          option: 'SHOP',
        },
        {
          option: 'MORE',
        },
      ];
    }
  }

}
