export class Product{
	Id: number;
	PartNumber: string;
	Name: string;
	Price: number;
	Unit: string;
	PhotoPath: string;
	Vendor: string;
	display(): void {
		console.log(this);
	}

	static sortableKeys = ['Name','Unit','Price','PartNumber','PhotoPath', 'Vendor'];

	constructor(Id: number = 0, PartNumber: string = '',Name: string = '',Price: number = 0, Unit: string = '',
		PhotoPath: string = '',Vendor: string = ''){
		this.Id = Id;
		this.PartNumber = PartNumber;
		this.Name = Name;
		this.Price = Price;
		this.Unit = Unit;
		this.PhotoPath = PhotoPath;
		this.Vendor = Vendor; //do not need id when creating a new entry 
	}

}