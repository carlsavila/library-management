export class Kitten {

        private _id: number = 0;
        static kittenNumber: number = 0;
    
        constructor(
            private _name: string,
            private readonly _breed: string,
            private readonly _age: Date,
            private _image: string,
        ) {
    
            Kitten.addKittNumber();
            this._id = Kitten.getKittNumber();
            console.log("compteur : " + Kitten.getKittNumber() +  ". id "+  this.name + " " + this.id);
        }
    
        get id(): number { return this._id; }
    
        get name(): string { return this._name; }
        set name(n: string) { this._name = n; }
    
        get race(): string { return this._breed; }
    
        get age(): Date { return this._age; }
    
        get image(): string { return this._image; }
        set image(u: string) { this._image = u; }
    
    
        static getKittNumber() : number{
            return this.kittenNumber;
        }
        static addKittNumber() : void{
            this.kittenNumber ++;
        }
}
