import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItemService} from '../../../service/lineitem.service';
import { LineItem } from '../../../model/lineitem';
import { Round } from '../../../util/rounding';
import { ProductService} from '../../../service/product.service';
import { Product } from '../../../model/product';
@Component({
  selector: 'app-lineitem-create',
  templateUrl: './lineitem-create.component.html',
  styleUrls: ['./lineitem-create.component.css']
})
export class LineitemCreateComponent implements OnInit {
  title: string = "Line Item Create";

  id: string;
  resp: any;
  prod: Product;
  products: Product[];

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
   recalculateTotal(val) {
     // console.log(val);
     this.ProdSvc.get(val)
     .subscribe(product => {
       this.prod = product.length > 0 ? product[0]: null;
       if (this.prod != null){
            this.lineitem.Total = Round((this.lineitem.Quantity * this.prod.Price),2);
            this.lineitem.ProductID = val;
       }

     });
  }

  constructor(private LineItemSvc: LineItemService,
  			  private router: Router,
          private ProdSvc: ProductService,
  			  private route: ActivatedRoute) { }

  ngOnInit() {
        this.ProdSvc.list()
    .subscribe(products=> {
      this.products = products;
      console.log(products);
    });
    this.lineitem.Total = 0;
  }

}
