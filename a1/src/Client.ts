interface NewClient{
    clientName: string;
    gender: string;
    dateOfBrith: string;
    cpf: number;
    phone: number;
    email: string;
}

export class Client{
    private _clientName: string;
    private _gender: string;
    private _dateOfBirth: string;
    private _cpf: number;
    private _phone: number;
    private _email: string;
    private _purchases = [];
    
    constructor({clientName,gender,dateOfBrith,cpf,phone,email}:NewClient){
        this._clientName = clientName;
        this._gender = gender;
        this._dateOfBirth = dateOfBrith;
        this._cpf = cpf;
        this._phone = phone;
        this._email = email;
    }

    public purchase(item: string){
        const pos = this.purchases.length;
        this._purchases[pos] = item;
        console.log(`${this.clientName} has bought ${item}.`);
    }

    public listPurchases(){
        console.log(`\n${this.clientName}'s purchases:\n`);
        for(let i=0;i<this.purchases.length;i++){
            console.log(`${i+1}. ${this.purchases[i]}`);
        }
    }

    public return(item: number){
        const pos = item-1;
        console.log(`${this.clientName} has returned ${this.purchases[pos]}`);
        this.purchases.splice(pos,1);
    }

    public clientInfo(){
        console.log(`\n######## CLIENT'S INFO ########\n`);
        console.log(`Name: ${this.clientName}`);
        console.log(`Gender: ${this.gender}`);
        console.log(`Birthday: ${this.dateOfBirth}`);
        console.log(`CPF: ${this.cpf}`);
        console.log(`Phone: ${this.phone}`);
        console.log(`Email: ${this.email}`);
    }
    
    public get clientName(): string {
        return this._clientName;
    }
    public set clientName(value: string) {
        this._clientName = value;
    }
    public get gender(): string {
        return this._gender;
    }
    public set gender(value: string) {
        this._gender = value;
    }
    public get dateOfBirth(): string {
        return this._dateOfBirth;
    }
    public set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }
    public get cpf(): number {
        return this._cpf;
    }
    public set cpf(value: number) {
        this._cpf = value;
    }
    public get phone(): number {
        return this._phone;
    }
    public set phone(value: number) {
        this._phone = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get purchases() {
        return this._purchases;
    }
    public set purchases(value) {
        this._purchases = value;
    }
    

}