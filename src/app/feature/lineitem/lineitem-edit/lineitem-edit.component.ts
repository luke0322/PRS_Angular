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

@Component({
  selector: 'app-lineitem-edit',
  templateUrl: './lineitem-edit.component.html',
  styleUrls: ['./lineitem-edit.component.css']
})
export class LineitemEditComponent implements OnInit {
  title: string = "Line Item Edit";

  id: string;
  resp: any;

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

   // compareFn(v1: number, v2: number):boolean{
   // 		return v1 == v2;
   // } we may need this for product edit to work (test thoroughly)


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
  }
}
