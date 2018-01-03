import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vendor } from '../model/vendor';

const url ='http://localhost:8080/Vendors/'; //we have this one time for service


@Injectable()
export class VendorService {

	//vendors: Vendor[];

	// authenticate(vendor: Vendor): Observable<Vendor[]>{
	// 	return this.http.post(url + "Authenticate", vendor) as Observable<Vendor[]>;
	//  }

	list(): Observable<Vendor[]>{
		return this.http.get(url + "List") as Observable<Vendor[]>;
		//will look like localhost:8080/Vendors/List get call
	}


	get(id): Observable<Vendor[]>{
		//console.log(id); //we need a json object returned
		return this.http.get(url +"Get?id=" + id) as Observable<Vendor[]>;
	}

	add(vendor: Vendor){
		return this.http.post(url + "Add", vendor) as Observable<any>;
		//will look like localhost:8080/Vendors/List get call
	}

	delete(id): Observable<any>{
		return this.http.get(url + "Delete?id=" + id) as Observable<any>;
		//will look like localhost:8080/Vendors/List get call
	}

	change(vendor: Vendor){
		return this.http.post(url + "Change", vendor) as Observable<any>;
		//will look like localhost:8080/Vendors/List get call
	}

	private handleError(error:any): Promise<any>{
		console.error('An error has occured',error);
		return Promise.reject(error.message || error); 
		//will handle all ajax calls in vendor
	}
  constructor(private http: HttpClient) { } //we need to inject the http 
  //this is how a class uses a service (HTTP client)
  //must import service, inject inside constructor, and use in all class
}
