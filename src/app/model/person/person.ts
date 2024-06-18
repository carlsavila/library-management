export class Person {

    constructor(
        private _firstname: string,
        private _lastname: string,
        private _sex: string,
        private _birthday: Date,
        private _email: string,
        private _password: string,
        private _mobilNumber: string,
        private _picture: string,
    ) { }

    get firstname(): String {
        return this._firstname;
    }
    get lastname(): String {
        return this._lastname;
    }
    get sex(): String {
        return this._sex;
    }
    get email(): String {
        return this._email;
    }
    get password(): String {
        return this._password;
    }
    get birthday(): Date {
        return this._birthday;
    }
    get mobilNumber(): String {
        return this._mobilNumber;
    }
    get picturer(): String {
        return this._picture;
    }

}
