import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusService} from '../../../service/status.service';
import { Status } from '../../../model/status';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit {

  title: string = "Status Detail";

  id: string;
  resp: any;

  status: Status;
  
  constructor(private StatusSvc: StatusService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.StatusSvc.get(this.id)
  	 	.subscribe(status => {
         this.status = status.length > 0 ? status[0]: null;
       });
  }
}
