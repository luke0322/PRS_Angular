import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { Product } from '../../../model/product';

import { LineItemService } from '../../../service/lineitem.service';
import { LineItem } from '../../../model/lineitem';
@Component({
  selector: 'app-lineitem-list',
  templateUrl: './lineitem-list.component.html',
  styleUrls: ['./lineitem-list.component.css']
})
export class LineitemListComponent implements OnInit {
  title: string ='LineItem List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = LineItem.sortableKeys;
  lineitems: LineItem[];
  
  constructor(private LineitemSvc: LineItemService) { }

  ngOnInit() {
  	this.LineitemSvc.list()
  	.subscribe(lineitems=> {
  		this.lineitems = lineitems;
      console.log(lineitems);
  	});
  }
}
