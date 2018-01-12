import { User } from '../model/user';
import { Status } from '../model/status';
export class PurchaseRequest{
	Id: number;
	Description: string;
	Justification: string;
	DateNeeded: Date;
	DeliveryMode: string;
	StatusID: Status;
	Total: number;
	SubmittedDate: Date;
	UserID: number;
	display(): void {
		console.log(this);
	}

	static sortableKeys = ['Id','Justification','DeliveryMode','DateNeeded','Description','StatusID', 'Total', 'SubmittedDate', 'UserID'];

	constructor(Id: number = 0, Description: string = '',Justification: string = '', DeliveryMode: string = '',
		StatusID:Status = null,Total: number = 0, UserID:number = 0){
		this.Id = Id;
		this.Description = Description;
		this.Justification = Justification;
		// this.DateNeeded = DateNeeded;
		this.DeliveryMode = DeliveryMode;
		this.StatusID = StatusID;
		this.Total = Total; //do not need id when creating a new entry 
		//this.SubmittedDate = SubmittedDate;
		this.UserID = UserID;
	}
}