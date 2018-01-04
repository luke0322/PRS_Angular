import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';

const url ='http://localhost:8080/Products/'; //we have this one time for service


@Injectable()
export class ProductService {

	//products: Product[];

	// authenticate(product: Product): Observable<Product[]>{
	// 	return this.http.post(url + "Authenticate", product) as Observable<Product[]>;
	//  }

	list(): Observable<Product[]>{
		return this.http.get(url + "List") as Observable<Product[]>;
		//will look like localhost:8080/Products/List get call
	}


	get(id): Observable<Product[]>{
		//console.log(id); //we need a json object returned
		return this.http.get(url +"Get?id=" + id) as Observable<Product[]>;
	}

	add(product: Product){
		return this.http.post(url + "Add", product) as Observable<any>;
		//will look like localhost:8080/Products/List get call
	}

	delete(id): Observable<any>{
		return this.http.get(url + "Delete?id=" + id) as Observable<any>;
		//will look like localhost:8080/Products/List get call
	}

	change(product: Product){
		return this.http.post(url + "Change", product) as Observable<any>;
		//will look like localhost:8080/Products/List get call
	}

	private handleError(error:any): Promise<any>{
		console.error('An error has occured',error);
		return Promise.reject(error.message || error); 
		//will handle all ajax calls in product
	}
  constructor(private http: HttpClient) { } //we need to inject the http 
  //this is how a class uses a service (HTTP client)
  //must import service, inject inside constructor, and use in all class
}
