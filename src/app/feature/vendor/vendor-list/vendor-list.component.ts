import { Component, OnInit } from '@angular/core';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  
  title: string ='Vendor List';
  selectedSortKey: string = 'State';
  sortDesc: string = 'asc';
  sortKeys: string[] = Vendor.sortableKeys;
  vendors: Vendor[];
  
  constructor(private UserSvc: VendorService,
              private SysSvc: SystemService) { }

  ngOnInit() {
  	this.UserSvc.list()
  	.subscribe(vendors=> {
  		this.vendors = vendors;
      console.log(vendors);
  	});
  }
}
