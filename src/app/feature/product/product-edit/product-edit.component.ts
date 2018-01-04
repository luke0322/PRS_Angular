import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService} from '../../../service/vendor.service';
import { Vendor } from '../../../model/vendor';
import { ProductService} from '../../../service/product.service';
import { Product } from '../../../model/product';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title: string = "Product Edit";

  id: string;
  resp: any;

  product: Product;
  vendors: Vendor[]; //used for dropdown box

  change(){
     console.log("this.product", this.product);
   	 this.ProductSvc.change(this.product)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Product Change:", this.resp);
  			this.router.navigate(['/product/list']);
   		});
   }

   // compareFn(v1: Vendor, v2: Vendor): boolean{
   // 		return v1 &&
   // } we may need this for product edit to work (test thoroughly)


  constructor(private ProductSvc: ProductService,
  			  private VendorSvc: VendorService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.ProductSvc.get(this.id)
  	 	.subscribe(products => {
         this.product = products.length > 0 ? products[0]: null;
         console.log(this.product);
       });

  	 this.VendorSvc.list() //new call to vendor service, for dropdown list
  	 	 .subscribe(vendors=> this.vendors = vendors);
  }
}
