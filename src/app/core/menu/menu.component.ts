import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuitems: Menu[] = [
  	//new Menu('HOME','/home', 'Home menu item'),
  	new Menu('ABOUT','/about','About menu item'),
    new Menu('USER','/user/list','About user'),
    new Menu('VENDOR','/vendor/list','About vendor'),
    new Menu('PRODUCT','/product/list','About product')
  ];
  constructor() { }

  ngOnInit() {
  }

}
