import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-purchaserequest-list',
  templateUrl: './purchaserequest-list.component.html',
  styleUrls: ['./purchaserequest-list.component.css']
})
export class PurchaserequestListComponent implements OnInit {

  title: string ='Purchase Request List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequest.sortableKeys;
  purchaseRequests: PurchaseRequest[];
  
  constructor(private PurchaseRequestSvc: PurchaserequestService) { }

  ngOnInit() {
  	this.PurchaseRequestSvc.list()
  	.subscribe(purchaseRequests=> {
  		this.purchaseRequests = purchaseRequests;
      console.log(purchaseRequests);
  	});
  }
}
