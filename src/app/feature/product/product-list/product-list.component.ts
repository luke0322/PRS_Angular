import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../service/product.service';
import { Product } from '../../../model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  title: string ='Product List';
  selectedSortKey: string = 'Vendor';
  sortDesc: string = 'asc';
  sortKeys: string[] = Product.sortableKeys;
  products: Product[];
  
  constructor(private ProductSvc: ProductService) { }

  ngOnInit() {
  	this.ProductSvc.list()
  	.subscribe(products=> {
  		this.products = products;
      console.log(products);
  	});
  }

}