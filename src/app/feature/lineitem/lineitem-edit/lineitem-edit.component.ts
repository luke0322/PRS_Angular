import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { ProductService} from '../../../service/product.service';
import { Product } from '../../../model/product';
import { UserService} from '../../../service/user.service';
import { User } from '../../../model/user';
import { LineItemService} from '../../../service/lineitem.service';
import { LineItem } from '../../../model/lineitem';
import { Round } from '../../../util/rounding';

@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './lineitem-edit.component.html',
  styleUrls: ['./lineitem-edit.component.css']
})
export class LineitemEditComponent implements OnInit {
  title: string = "Line Item Edit";

  id: string;
  resp: any;
  prod: Product;
  products: Product[];

  lineitem: LineItem; //used for dropdown box

  change(){
     console.log("this.lineitem", this.lineitem);
   	 this.LineItemSvc.change(this.lineitem)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Line Item Change:", this.resp);
  			this.router.navigate(['/lineitem/list']);
   		});
   }

   recalculateTotal() {
     this.ProductSvc.get(this.lineitem.ProductID)
     .subscribe(product => {
       this.prod = product.length > 0 ? product[0]: null;
       this.lineitem.Total = Round((this.lineitem.Quantity * this.prod.Price),2);
     });
  }

  constructor(private ProductSvc: ProductService,
  			  private UserSvc: UserService,
  			  private PurchaseRequestSvc: PurchaserequestService,
  			  private LineItemSvc: LineItemService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.LineItemSvc.get(this.id)
  	 	.subscribe(lineitems => {
         this.lineitem = lineitems.length > 0 ? lineitems[0]: null;
         console.log(this.lineitem);
       });
    this.ProductSvc.list()
    .subscribe(products=> {
      this.products = products;

      console.log(products);
    });
  }
}
