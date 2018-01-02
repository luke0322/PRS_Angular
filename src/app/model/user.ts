export class User{
	Id: number;
	UserName: string;
	Password: string;
	FirstName: string;
	LastName: string;
	PhoneNumber: string;
	Email: string;
	Admin: boolean;
	Reviewer: boolean;
	Active: boolean;
	DateCreated: Date;
	display(): void {
		console.log(this);
	}

	static sortableKeys = [ 'Id', 'FirstName','LastName','UserName','PhoneNumber', 'Email', 'Admin','Reviewer'];

	constructor(Id: number = 0, UserName: string = '',Password: string = '',FirstName: string = '', LastName: string = '',
		PhoneNumber: string = '',Email: string = '',Admin: boolean = false,Reviewer: boolean = false,Active: boolean = false, DateCreated: Date = null){
		this.Id = Id;
		this.UserName = UserName;
		this.Password = Password;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.PhoneNumber = PhoneNumber;
		this.Email = Email; //do not need id when creating a new entry 
		this.Admin = Admin;
		this.Reviewer = Reviewer;
		this.Active = Active;
		this.DateCreated = DateCreated;
	}

}