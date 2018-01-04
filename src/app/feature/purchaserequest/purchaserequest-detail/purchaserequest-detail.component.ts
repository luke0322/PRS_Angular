import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/PurchaseRequest';

@Component({
  selector: 'app-purchaserequest-detail',
  templateUrl: './purchaserequest-detail.component.html',
  styleUrls: ['./purchaserequest-detail.component.css']
})
export class PurchaserequestDetailComponent implements OnInit {
  title: string = "PurchaseRequest Detail";

  id: string;
  resp: any;

  purchaserequest:PurchaseRequest;

   delete(){
     console.log("this.purchaserequest.id = ", this.purchaserequest.Id);
   	this.PurchaseRequestSvc.delete(this.purchaserequest.Id)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("PurchaseRequest-detail-Remove:", this.resp);
  			this.router.navigate(['/purchaserequest/list']);
   		});
   }
  constructor(private PurchaseRequestSvc: PurchaserequestService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.PurchaseRequestSvc.get(this.id)
  	 	.subscribe(purchaseRequests => {
         this.purchaserequest = purchaseRequests.length > 0 ? purchaseRequests[0]: null;
       });
  }
}
