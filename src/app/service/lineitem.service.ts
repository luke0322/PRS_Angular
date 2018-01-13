import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LineItem } from '../model/lineitem';

const url ='http://localhost:8080/LineItems/';

@Injectable()
export class LineItemService {

	lines(id): Observable<LineItem[]>{
		return this.http.get(url + "LinesForPR?id=" + id) as Observable<LineItem[]>;
		//will look like localhost:8080/PurchaseRequests/List get call
	}

	list(): Observable<LineItem[]>{
		return this.http.get(url + "List") as Observable<LineItem[]>;
		//will look like localhost:8080/LineItems/List get call
	}


	get(id): Observable<LineItem[]>{
		//console.log(id); //we need a json object returned
		return this.http.get(url +"Get?id=" + id) as Observable<LineItem[]>;
	}

	add(lineitem: LineItem){
		return this.http.post(url + "Add", lineitem) as Observable<any>;
		//will look like localhost:8080/LineItems/List get call
	}

	delete(id): Observable<any>{
		return this.http.get(url + "Delete?id=" + id) as Observable<any>;
		//will look like localhost:8080/LineItems/List get call
	}

	change(lineitem: LineItem){
		return this.http.post(url + "Change", lineitem) as Observable<any>;
		//will look like localhost:8080/LineItems/List get call
	}

	private handleError(error:any): Promise<any>{
		console.error('An error has occured',error);
		return Promise.reject(error.message || error); 
		//will handle all ajax calls in lineitem
	}
  constructor(private http: HttpClient) { }
}
