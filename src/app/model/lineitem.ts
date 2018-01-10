import { PurchaseRequest } from '../model/purchaserequest';
import { Product } from '../model/product';
export class LineItem{
	Id: number;
	PurchaseRequestID: PurchaseRequest;
	ProductID: Product;
	Quantity: number;

	display(): void {
	console.log(this);
	}

	static sortableKeys = [ 'Id', 'PurchaseRequest','Product','Quantity'];

	constructor(Id: number = 0, Purchaserequest: number = 0,
							ProductID: number = 0, Quantity: number = 1) {
		this.Id = Id;
		this.PurchaseRequestID = new PurchaseRequest();
		this.PurchaseRequestID.Id = Purchaserequest;
		this.ProductID = new Product();
		this.ProductID.Id = ProductID;
		this.Quantity = Quantity;
	}
}