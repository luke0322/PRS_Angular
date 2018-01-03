export class Vendor{ //change to reflect vendor here
	Id: number;
	Code: string;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	Phone: string;
	Email: string;
	Preapproved: boolean;
	display(): void {
		console.log(this);
	}

	static sortableKeys = [ 'Id', 'Address','City','Code','State', 'Zip', 'Phone','Email', 'Preapproved'];

	constructor(Id: number = 0, Code: string = '',Name: string = '',Address: string = '', City: string = '',
		State: string = '',Zip: string = '',Phone: string = '',Email: string = '',Preapproved: boolean = false){
		this.Id = Id;
		this.Code = Code;
		this.Name = Name;
		this.Address = Address;
		this.City = City;
		this.State = State;
		this.Zip = Zip; //do not need id when creating a new entry 
		this.Phone = Phone;
		this.Email = Email;
		this.Preapproved = Preapproved;
	}

}