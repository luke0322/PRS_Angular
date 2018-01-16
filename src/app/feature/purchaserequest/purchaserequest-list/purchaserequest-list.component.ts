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
  selectedSortKey: string = 'DateNeeded';
  sortDesc: string = 'asc';
  sortKeys: string[] = PurchaseRequest.sortableKeys;
  purchaseRequests: PurchaseRequest[];
  product: Product;
  purchReq: PurchaseRequest;
  users: User[];
  userDisplay: string;
  
  appendLineItems(event){
    event.preventDefault();
    let firstRowIndex = 1;
    var rowNumber = event.currentTarget.parentElement.id;
    let purchaseId: any = (event.srcElement.name.substring(6, event.srcElement.name.length));
    var parentRequest = document.getElementById("purchaseRequest"+purchaseId);
    var table = document.getElementById("ourtable").getElementsByTagName('tbody')[0];
    var lineItemHead = table.insertRow(firstRowIndex+parseInt(rowNumber));
    lineItemHead.style.borderTop = '4px solid black'
    lineItemHead.style.borderLeft = '4px solid black'
    this.LineItemSvc.lines(purchaseId)
    .subscribe(prlis=>{
      if(prlis.length > 0){
        let producthead = document.createElement("span");
        let totalhead = document.createElement("span");
        let pricehead = document.createElement("span");
        let quantityhead = document.createElement("span");
        let prhead = document.createElement("span");
        totalhead.innerHTML = "Total";
        producthead.innerHTML = "Product";
        pricehead.innerHTML = "Price";
        quantityhead.innerHTML = "Quantity";
        prhead.innerHTML = "Line Items ";
        var TotalCell = lineItemHead.insertCell(0);
        TotalCell.appendChild(totalhead);
        var QuantityCell = lineItemHead.insertCell(0);
        QuantityCell.appendChild(quantityhead);
        var PriceHead = lineItemHead.insertCell(0);
        PriceHead.appendChild(pricehead);
        var ProductCell = lineItemHead.insertCell(0);
        ProductCell.appendChild(producthead);
        var ProductCell = lineItemHead.insertCell(0);
        ProductCell.appendChild(prhead);
        var ProductCell = lineItemHead.insertCell(0);
        for (let i = 0; i < prlis.length; ++i){
          this.addTableRow(firstRowIndex, rowNumber, prlis[i])
        }
      }else if (prlis.length == 0){
        let emptyPRLIS = document.createElement("tr")
        emptyPRLIS.innerHTML = "This purchase request has no line items"
        parentRequest.appendChild(emptyPRLIS);
      }
    });
  }

  addTableRow(firstRowIndex, rowNumber, thisPRLI){
          firstRowIndex++;
          var tabl = document.getElementById("ourtable").getElementsByTagName('tbody')[0];
          var prRow = tabl.insertRow(firstRowIndex+parseInt(rowNumber));
          prRow.style.borderLeft = '4px solid black';
          let name = document.createElement("span");
          let price = document.createElement("span");
          let quantity = document.createElement("span");
          let total = document.createElement("span");
          quantity.innerHTML = thisPRLI.Quantity.toString();
          this.ProductSvc.get(thisPRLI.ProductID)
          .subscribe(prod=>{
            let ourproduct =  prod.length > 0 ? prod[0]: null;
            name.innerHTML = ourproduct.Name;
            price.innerHTML = ourproduct.Price.toString();
            total.innerHTML = (parseInt(quantity.innerHTML)*ourproduct.Price).toString();
            var TotalPriceCell = prRow.insertCell(0);
            TotalPriceCell.appendChild(total);
            var PRquantityCell = prRow.insertCell(0);
            PRquantityCell.appendChild(quantity);
            var PRPriceCell = prRow.insertCell(0);
            PRPriceCell.appendChild(price);
            var PRNameCell = prRow.insertCell(0);
            PRNameCell.appendChild(name);
            var EmptyCell = prRow.insertCell(0);
            var AnotherEmptyCell = prRow.insertCell(0);
          });
  }

  constructor(private PurchaseRequestSvc: PurchaserequestService,
              private LineItemSvc: LineItemService,
              private ProductSvc: ProductService,
              private UserSvc: UserService) { }

  ngOnInit() {
  	this.PurchaseRequestSvc.list()
  	.subscribe(purchaseRequests=> {
  		this.purchaseRequests = purchaseRequests;
      console.log(purchaseRequests);
  	});

    this.UserSvc.list()
      .subscribe(users=>{
        this.users = users;
        console.log(this.users);
      this.addUserName(this.users);
      });
    

  }



  addUserName(users: User[]) {
   // for(let user of users) {
   //    console.log("Getting username for userId: ");
   //    this.UserSvc.get(this.purchReq.UserID)
   //     .subscribe(users => {
   //        this.userDisplay =  users[0].UserName; //how to cast in ts
   //         console.log(this.userDisplay);

   //       });
   //      }
      }
}
