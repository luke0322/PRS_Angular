import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PurchaseRequest } from '../model/purchaserequest';

const url ='http://localhost:8080/PurchaseRequests/';

@Injectable()
export class PurchaserequestService {

	list(): Observable<PurchaseRequest[]>{
		return this.http.get(url + "List") as Observable<PurchaseRequest[]>;
		//will look like localhost:8080/PurchaseRequests/List get call
	}


	get(id): Observable<PurchaseRequest[]>{
		//console.log(id); //we need a json object returned
		return this.http.get(url +"Get?id=" + id) as Observable<PurchaseRequest[]>;
	}

	add(purchaseRequest: PurchaseRequest){
		return this.http.post(url + "Add", purchaseRequest) as Observable<any>;
		//will look like localhost:8080/PurchaseRequests/List get call
	}

	delete(id): Observable<any>{
		return this.http.get(url + "Delete?id=" + id) as Observable<any>;
		//will look like localhost:8080/PurchaseRequests/List get call
	}

	change(purchaseRequest: PurchaseRequest){
		return this.http.post(url + "Change", purchaseRequest) as Observable<any>;
		//will look like localhost:8080/PurchaseRequests/List get call
	}

	private handleError(error:any): Promise<any>{
		console.error('An error has occured',error);
		return Promise.reject(error.message || error); 
		//will handle all ajax calls in purchaseRequest
	}
  constructor(private http: HttpClient) { } 

}
