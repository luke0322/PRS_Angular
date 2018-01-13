import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PurchaserequestService} from '../../../service/purchaserequest.service';
import { PurchaseRequest } from '../../../model/purchaserequest';
import { UserService} from '../../../service/user.service';
import { User } from '../../../model/user';
import { SystemService} from '../../../service/system.service';
import { Status } from '../../../model/status';
import { StatusService} from '../../../service/status.service';

@Component({
  selector: 'app-purchaserequest-create',
  templateUrl: './purchaserequest-create.component.html',
  styleUrls: ['./purchaserequest-create.component.css']
})
export class PurchaserequestCreateComponent implements OnInit {

  title: string = "Purchase Request Create";

  id: string;
  resp: any;

  purchaserequest: PurchaseRequest = new PurchaseRequest();
  //user: User[];

  add(){
     console.log("this.purchaserequest", this.purchaserequest);
     console.log("dateneeded", this.purchaserequest.DateNeeded);
   	 this.PurchaserequestSvc.add(this.purchaserequest)
   		.subscribe(resp =>{
   			this.resp = resp;
  			this.router.navigate(['/purchaserequest/list']);
   		});
   }
  constructor(private PurchaserequestSvc: PurchaserequestService,
  			  private router: Router,
  			  private route: ActivatedRoute,
          private SysSvc: SystemService,
          private UserSvc: UserService) { }

  ngOnInit() {
    this.purchaserequest.StatusID = 1;
    // this.UserSvc.list()
    //   .subscribe(users => this.user = users);
    if(this.SysSvc.data.user.loggedIn) {
      this.purchaserequest.UserID = this.SysSvc.data.user.instance.Id;
    } else {
      console.error("User not logged in.");
    }
  }

}
