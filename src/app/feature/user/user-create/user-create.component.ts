import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService} from '../../../service/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  title: string = "User Create";

  id: string;
  resp: any;

  user: User = new User();

  add(){
     console.log("this.user", this.user);
   	 this.UserSvc.add(this.user)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("User Add:", this.resp);
  			this.router.navigate(['/user/list']);
   		});
   }
  constructor(private UserSvc: UserService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
