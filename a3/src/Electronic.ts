interface NewElectronic{
    deviceName: string;
    category: string;
}

export class Electronic{
    private _deviceName: string;
    private _category: string;
    private _volume: number = 100;
    private _isOn: boolean = false;

    constructor({deviceName, category}:NewElectronic){
        this.deviceName = deviceName;
        this.category = category;
    }

    public turnOn(){
        let result: string;
        if(this.getIsOn()){
            result = `${this.deviceName} is already on.`;
        }else{
            this.setIsOn(true);
            result = `${this.deviceName} has been turned on.`;
        }
        console.log(result);
    }

    public turnOff(){
        let result: string;
        if(!this.getIsOn()){
            result = `${this.deviceName} is already off.`;
        }else{
            this.setIsOn(false);
            result = `${this.deviceName} has been turned off.`;
        }
        console.log(result);
    }

    public volumeUp(){
        let result: string;
        if(this.getIsOn()){
            if(this.getVolume()>=100){
                result = `Device at max volume.`;
            }else{
                this.setVolume(1);
                result = `++ Volume: ${this.getVolume()} ++`;
            }
            console.log(result);
        }
    }

    public volumeDown(){
        let result: string;
        if(this.getIsOn){
            if(this.getVolume()<=0){
                result = `Device at min volume.`;
            }else{
                this.setVolume(2);
                result = `-- Volume: ${this.getVolume()} --`;
            }
            console.log(result);
        }
    }

    public deviceInfo(){
        console.log('\n######### DEVICE INFO #########\n');
        console.log(`Category: ${this.category}`);
        console.log(`Name: ${this.deviceName}`);
        if(this.getIsOn()){
            console.log(`This device is on`);
            console.log(`Current volume: ${this.getVolume()}`);
        }else{
            console.log(`This device is off`);
        }
    }

    public getIsOn(): boolean {
        return this._isOn;
    }
    public setIsOn(value: boolean) {
        this._isOn = value;
    }
    public getVolume(): number {
        return this._volume;
    }
    public setVolume(value: number) {
        switch(value){
            case 1:
                this._volume += 20;
                break;
            case 2:
                this._volume -= 20;
                break;
        }
    }
    public get deviceName(): string {
        return this._deviceName;
    }
    public set deviceName(value: string) {
        this._deviceName = value;
    }
    public get category(): string {
        return this._category;
    }
    public set category(value: string) {
        this._category = value;
    }

}
