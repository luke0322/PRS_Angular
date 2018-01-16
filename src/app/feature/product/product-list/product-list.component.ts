import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';
import { VendorService } from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';
import { SystemService } from '../../../service/system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string ='Product List';
  selectedSortKey: string = 'Price';
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  products: Product[];
  
  constructor(private ProductSvc: ProductService,
              private VendorSvc: VendorService,
              private SysSvc: SystemService) { }

  ngOnInit() {
  	this.ProductSvc.list()
  	.subscribe(products=> {
  		this.products = products;
      this.addVendorName(this.products);
      console.log(products);
  	});

  }
   addVendorName(prods: Product[]) {
   for(let prod of prods) {
      console.log("Getting Vendor Name for vendorId: " + prod.Vendor);
      this.VendorSvc.get(prod.Vendor)
       .subscribe(vendors => {
           prod.Vendor = vendors[0].Name;
           console.log(prod);

         });
        }
      }
}
 