interface NewAirplane{
    model: string;
    color: string;
    pilotName: string;
    seats: number;
}

export class Airplane{
    private _model: string;
    private _color: string;
    private _pilotName: string;
    private _seats: number;
    private _fuel: number = 0;
    private _isFlying: boolean = false;

    constructor({model, color, pilotName, seats}:NewAirplane){
        this.model = model;
        this.color = color;
        this.pilotName = pilotName;
        this.seats = seats;
    }

    public fillUp(){
        if(this.getFuel()<100){
            this.setFuel(2,100);
            console.log('You tank has been filled up.');
        }else{
            console.log('Your tank is already full.');
        }
    }

    public takeOff(value: number){
        let result: string;

        if(this.getIsFlying()){
            result = 'This plane is already up in the air!';
        }else{
            switch(value){
                case 1:
                    if(this.getFuel()>=80){
                        result = `A ${this.color} ${this.model} plane piloted by ${this.pilotName} just took off to a long flight!`;
                        this.setFuel(1, 80);
                    }else{
                        result = `You don't have enough fuel for this. Fill up!`;
                    }
                    break;
                case 2:
                    if(this.getFuel()>=60){
                        result = `A ${this.color} ${this.model} plane piloted by ${this.pilotName} just took off to a medium flight!`;
                        this.setFuel(1, 60);
                    }else{
                        result = `You don't have enough fuel for this. Fill up!`;
                    }
                    break;
                case 3:
                    if(this.getFuel()>=40){
                        result = `A ${this.color} ${this.model} plane piloted by ${this.pilotName} just took off to a short flight!`;
                        this.setFuel(1, 40);
                    }else{
                        result = `You don't have enough fuel for this. Fill up!`;
                    }
                    break;
                default:
                    result = `No can do. Try again.`;
            }
        }

        if(result!=`You don't have enough fuel for this. Fill up!` && result!='No can do. Try again.'){
            this.setIsFlying(true);
        }

        console.log(result);
    }

    public land(){
        let result: string;

        if(!this.getIsFlying()){
            result = 'This plane is already on the ground!';
        }else{
            result= `The ${this.color} ${this.model} plane piloted by ${this.pilotName} is landing!`;
            this.setIsFlying(false);
        }
        console.log(result);
    }

    public planeInfo(){
        console.log('\n########### PLANE INFO ###########\n');
        console.log(`Airplane model: ${this.model}`);
        console.log(`Color: ${this.color}`);
        console.log(`Pilot: ${this.pilotName}`);
        console.log(`Seats: ${this.seats}`);
        console.log(`Fuel level: ${this.getFuel()}%`);
        console.log(`State: ${this.getIsFlying()?'flying':'on the ground'}`);
    }

    
    public getIsFlying(): boolean {
        return this._isFlying;
    }

    public setIsFlying(value: boolean) {
        this._isFlying = value;
    }

    public getFuel(): number {
        return this._fuel;
    }

    public setFuel(op: number, value: number) {
        switch(op){
            case 1:
                this._fuel -= value;
                break;
            case 2:
                this._fuel = value;
                break;
        }
    }
    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get pilotName(): string {
        return this._pilotName;
    }
    public set pilotName(value: string) {
        this._pilotName = value;
    }
    public get seats(): number {
        return this._seats;
    }
    public set seats(value: number) {
        this._seats = value;
    }
}

