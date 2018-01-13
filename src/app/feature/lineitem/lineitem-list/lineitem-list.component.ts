import { Component, OnInit } from '@angular/core';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { PurchaserequestService } from '../../../service/purchaserequest.service';
import { Product } from '../../../model/product';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItemService } from '../../../service/lineitem.service';
import { LineItem } from '../../../model/lineitem';
@Component({
  selector: 'app-lineitem-list',
  templateUrl: './lineitem-list.component.html',
  styleUrls: ['./lineitem-list.component.css']
})
export class LineitemListComponent implements OnInit {
  title: string ='Line Item List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = LineItem.sortableKeys;
  lineitems: LineItem[];
  id: number;

  purchaserequest:PurchaseRequest;
  
  constructor(private LineitemSvc: LineItemService,
              private router: Router,
              private route: ActivatedRoute,
              private PurchaseRequestSvc: PurchaserequestService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['Id']);
    console.log(this.id);
  	this.LineitemSvc.lines(this.id)
  	.subscribe(lineitems=> {
  		this.lineitems = lineitems;
      console.log(lineitems);
  	});
    this.PurchaseRequestSvc.get(this.id)
       .subscribe(purchaseRequests => {
         this.purchaserequest = purchaseRequests.length > 0 ? purchaseRequests[0]: null;
       });
  }
}
