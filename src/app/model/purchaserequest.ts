export class PurchaseRequest{
	Id: number;
	Description: string;
	Justification: string;
	DateNeeded: Date;
	DeliveryMode: string;
	StatusID: number;
	Total: number;
	SubmittedDate: Date;
	User: number;
	display(): void {
		console.log(this);
	}

	static sortableKeys = ['Id','Justification','DeliveryMode','DateNeeded','Description','StatusID', 'Total', 'SubmittedDate', 'User'];

	constructor(Id: number = 0, Description: string = '',Justification: string = '', DeliveryMode: string = '',
		StatusID: number = 0,Total: number = 0, User:number = 0){
		this.Id = Id;
		this.Description = Description;
		this.Justification = Justification;
		// this.DateNeeded = DateNeeded;
		this.DeliveryMode = DeliveryMode;
		this.StatusID = StatusID;
		this.Total = Total; //do not need id when creating a new entry 
		//this.SubmittedDate = SubmittedDate;
		this.User = User;
	}
}