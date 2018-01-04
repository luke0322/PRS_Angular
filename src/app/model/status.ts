export class Status{
	Id: number;
	Description: string;

	display(): void {
		console.log(this);
	}

	static sortableKeys = ['Id','Description'];

	constructor(Id: number = 0, Description: string = ''){
		this.Id = Id;
		this.Description = Description;
	}
}