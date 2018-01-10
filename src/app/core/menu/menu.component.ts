import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuitems: Menu[] = [
    new Menu('ABOUT','/about','About menu item'),
  	new Menu('STATUS','/status', 'Status menu item'),
  	new Menu('REQUEST','/purchaserequest/list','About request'),
    new Menu('USER','/user/list','About user'),
    new Menu('VENDOR','/vendor/list','About vendor'),
    new Menu('PRODUCT','/product/list','About product'),
    new Menu('LOGIN','/user/login','User Login'),
    new Menu('ITEMS','/lineitem/list','About Line Items')
  ];
  constructor() { }

  ngOnInit() {
  }

}
