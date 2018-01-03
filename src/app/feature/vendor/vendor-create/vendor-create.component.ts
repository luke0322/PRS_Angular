import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService} from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  title: string = "Vendor Create";

  id: string;
  resp: any;

  vendor: Vendor = new Vendor();

  add(){
     console.log("this.vendor", this.vendor);
   	 this.VendorSvc.add(this.vendor)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Vendor Add:", this.resp);
  			this.router.navigate(['/vendor/list']);
   		});
   }
  constructor(private VendorSvc: VendorService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
