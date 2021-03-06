import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService} from '../../../service/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title: string = "Product Detail";

  id: string;
  resp: any;

  product: Product;

   delete(){
     console.log("this.product.id = ", this.product.Id);
   	this.ProductSvc.delete(this.product.Id)
   		.subscribe(resp =>{
   			this.resp = resp;
  			console.log("Product-detail-Remove:", this.resp);
  			this.router.navigate(['/product/list']);
   		});
   }
  constructor(private ProductSvc: ProductService,
  			  private router: Router,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params.subscribe(parms => this.id = parms['id']);
  	 this.ProductSvc.get(this.id)
  	 	.subscribe(products => {
         this.product = products.length > 0 ? products[0]: null;
       });
  }





}
