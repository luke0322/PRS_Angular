import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { ProductService} from '../../../service/product.service';
import { Product } from '../../../model/product';
import { UserService} from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-purchaserequest-edit',
  templateUrl: './purchaserequest-edit.component.html',
  styleUrls: ['./purchaserequest-edit.component.css']
})
export class PurchaserequestEditComponent implements OnInit {
  title: string = "Request Edit";

  id: string;
  resp: any;

  purchaserequest: PurchaseRequest; //used for dropdown box

  change(){
     console.log("this.product", this.purchaserequest);
   	 this.PurchaseRequestSvc.change(this.purchaserequest)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Purchase Request Change:", this.resp);
  			this.router.navigate(['/purchaserequest/list']);
   		});
   }

   // compareFn(v1: number, v2: number):boolean{
   // 		return v1 == v2;
   // } we may need this for product edit to work (test thoroughly)


  constructor(private ProductSvc: ProductService,
  			  private UserSvc: UserService,
  			  private PurchaseRequestSvc: PurchaserequestService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.PurchaseRequestSvc.get(this.id)
  	 	.subscribe(prs => {
         this.purchaserequest = prs.length > 0 ? prs[0]: null;
         console.log(this.purchaserequest);
       });
  }
}
