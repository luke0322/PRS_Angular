import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

const url ='http://localhost:8080/Users/'; //we have this one time for service


@Injectable()
export class UserService {

	//users: User[];

	// authenticate(user: User): Observable<User[]>{
	// 	return this.http.post(url + "Authenticate", user) as Observable<User[]>;
	//  }

	list(): Observable<User[]>{
		return this.http.get(url + "List") as Observable<User[]>;
		//will look like localhost:8080/Users/List get call
	}


	get(id): Observable<User[]>{
		//console.log(id); //we need a json object returned
		return this.http.get(url +"Get?id=" + id) as Observable<User[]>;
	}

	add(user: User){
		return this.http.post(url + "Add", user) as Observable<any>;
		//will look like localhost:8080/Users/List get call
	}

	delete(id): Observable<any>{
		return this.http.get(url + "Delete?id=" + id) as Observable<any>;
		//will look like localhost:8080/Users/List get call
	}

	change(user: User){
		return this.http.post(url + "Change", user) as Observable<any>;
		//will look like localhost:8080/Users/List get call
	}

	private handleError(error:any): Promise<any>{
		console.error('An error has occured',error);
		return Promise.reject(error.message || error); 
		//will handle all ajax calls in user
	}
  constructor(private http: HttpClient) { } //we need to inject the http 
  //this is how a class uses a service (HTTP client)
  //must import service, inject inside constructor, and use in all class
}
