import { PurchaseRequest } from '../model/purchaserequest';
import { Product } from '../model/product';
export class LineItem{
	Id: number;
	PurchaseRequestID: number;
	ProductID: number;
	Quantity: number;
	Total: number;

	display(): void {
	console.log(this);
	}

	static sortableKeys = [ 'Id', 'PurchaseRequestID','ProductID','Quantity','Total'];

	constructor(Id: number = 0, PurchaseRequestID: number = 0,
							ProductID: number = 0, Quantity: number = 1) {
		this.Id = Id;
		this.PurchaseRequestID= PurchaseRequestID;
		this.ProductID = ProductID;
		this.Quantity = Quantity;
	}
}