import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PurchaserequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  title: string = "Purchase Request Create";

  id: string;
  resp: any;

  purchaserequest: PurchaseRequest = new PurchaseRequest(0,'','','',0,0);

  add(){
     console.log("this.purchaserequest", this.purchaserequest);
   	 this.PurchaserequestSvc.add(this.purchaserequest)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Purchaserequest Add:", this.resp);
  			this.router.navigate(['/purchaserequest/list']);
   		});
   }
  constructor(private PurchaserequestSvc: PurchaserequestService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
