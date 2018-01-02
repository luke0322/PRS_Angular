import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { UserService} from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  title: string = "User Detail";

  id: string;
  resp: any;

  user: User;

  remove(){
  	// this.UserSvc.remove(this.user)
  	// 	.subscribe(resp =>{
  	// 		this.resp = resp;
  	// 		console.log("User-detail-Remove:", this.resp);
  	// 		this.router.navigate(['/user/list']);
  	// 	})
  }
  constructor(private UserSvc: UserService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.UserSvc.get(this.id)
  	 	.subscribe(users=> this.user = users.length > 0 ? users[0]: null);
  }

}
