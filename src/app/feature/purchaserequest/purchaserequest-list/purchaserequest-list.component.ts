import { Component, OnInit } from '@angular/core';
import { PurchaserequestService } from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { LineItemService } from '../../../service/lineitem.service';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';


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
  product: Product;
  
  appendLineItems(event){
    event.preventDefault();
    let purchaseId: any = (event.srcElement.name.substring(event.srcElement.name.length-1, event.srcElement.name.length));
    // var parentRequest = document.getElementById("purchaseRequest"+purchaseId);
    this.LineItemSvc.lines(purchaseId)
    .subscribe(prlis=>{
      var parentRequest = document.getElementById("purchaseRequest"+purchaseId);
      if(prlis.length > 0){
        for (var i = 0; i < prlis.length; ++i){
          
          let producthead = document.createElement("th");
          let pricehead = document.createElement("th");
          let quantityhead = document.createElement("th");
          let row = document.createElement("tr");
          let name = document.createElement("td");
          let price = document.createElement("td");
          let quantity = document.createElement("td");
          quantity.innerHTML = prlis[i].Quantity.toString();
          this.ProductSvc.get(prlis[i].ProductID)
          .subscribe(prod=>{
            let ourproduct =  prod.length > 0 ? prod[0]: null;
            name.innerHTML = ourproduct.Name;
            price.innerHTML = ourproduct.Price.toString();
            row.appendChild(name);
            row.appendChild(price);
            row.appendChild(quantity);
            parentRequest.appendChild(row);
          });
          // name.innerHTML = prlis[i].ProductSvc.
        }
      }else if (prlis.length == 0){

        let emptyPRLIS = document.createElement("tr")
        emptyPRLIS.innerHTML = "This purchase request has no line items"
        parentRequest.appendChild(emptyPRLIS);

      }
    });
  }
  constructor(private PurchaseRequestSvc: PurchaserequestService,
              private LineItemSvc: LineItemService,
              private ProductSvc: ProductService) { }

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
