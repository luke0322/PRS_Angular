import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';

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

  // addUserName(users: User[]) {
  //  for(let user of users) {
  //     console.log("Getting username for userId: " + user.Id);
  //     this.PurchaseRequestSvc.get(user.UserName)
  //      .subscribe(vendors => {
  //         user.Id = users[0].UserName; //how to cast in ts
  //          console.log(user);

  //        });
  //       }
  //     }
}
