export class Animal {

    constructor(
            private _name: string,
            private _sex: string,
            private _breed: string,
            private _birthday: Date,
            private _picture: string,
        ) { }
    
        get name(): String {
            return this._name;
        }
        get sex(): String {
            return this._sex;
        }
        get breed(): String {
            return this._breed;
        }
        get birthday(): Date {
            return this._birthday;
        }
        get picturer(): String {
            return this._picture;
        }
}
