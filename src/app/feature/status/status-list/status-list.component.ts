import { Component, OnInit } from '@angular/core';
import { StatusService } from '../../../service/status.service';
import { Status } from '../../../model/status';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {
  title: string ='Status List';
  selectedSortKey: string = 'Id';
  sortDesc: string = 'asc';
  sortKeys: string[] = Status.sortableKeys;
  status: Status[];
  
  constructor(private StatusSvc: StatusService) { }

  ngOnInit() {
  	this.StatusSvc.list()
  	.subscribe(status=> {
  		this.status = status;
      console.log(status);
  	});
  }
}
