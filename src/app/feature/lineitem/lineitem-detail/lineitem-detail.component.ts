import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItemService} from '../../../service/lineitem.service';
import { LineItem } from '../../../model/lineitem';
import { PurchaserequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';

@Component({
  selector: 'app-lineitem-detail',
  templateUrl: './lineitem-detail.component.html',
  styleUrls: ['./lineitem-detail.component.css']
})
export class LineitemDetailComponent implements OnInit {
  title: string = "Line Item Detail";

  id: string;
  resp: any;

  lineitem:LineItem;
  purchaseRequest: PurchaseRequest;

   delete(){
     console.log("this.lineitem.id = ", this.lineitem.Id);
   	this.LineItemSvc.delete(this.lineitem.Id)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("PurchaseRequest-detail-Remove:", this.resp);
  			this.router.navigate(['/lineitem/list']);
   		});
   }
  constructor(private LineItemSvc: LineItemService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.LineItemSvc.get(this.id)
  	 	.subscribe(lineitems => {
         this.lineitem = lineitems.length > 0 ? lineitems[0]: null;
       });
  }
}
