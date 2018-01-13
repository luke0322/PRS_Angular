import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItemService} from '../../../service/lineitem.service';
import { LineItem } from '../../../model/lineitem';

@Component({
  selector: 'app-lineitem-create',
  templateUrl: './lineitem-create.component.html',
  styleUrls: ['./lineitem-create.component.css']
})
export class LineitemCreateComponent implements OnInit {
  title: string = "Line Item Create";

  id: string;
  resp: any;

  lineitem: LineItem = new LineItem();

  add(){
     console.log("this.lineitem", this.lineitem);
   	 this.LineItemSvc.add(this.lineitem)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Line Item Add:", this.resp);
  			this.router.navigate(['/lineitem/list']);
   		});
   }
  constructor(private LineItemSvc: LineItemService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
