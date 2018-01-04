import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService} from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';
import { ProductService} from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title: string = "Product Create";

  id: string;
  resp: any;

  product: Product = new Product(0,'','',null,'','','');
  vendors: Vendor[]; //used for dropdown box

  add(){
     console.log("this.product", this.product);
   	 this.ProductSvc.add(this.product)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Product Add:", this.resp);
  			this.router.navigate(['/product/list']);
   		});
   }

  constructor(private ProductSvc: ProductService,
  			  private VendorSvc: VendorService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	 this.VendorSvc.list() //new call to vendor service, for dropdown list
  	 	 .subscribe(vendors=> this.vendors = vendors);
  }
}
