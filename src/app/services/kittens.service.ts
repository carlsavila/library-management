import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  // List available Kittens. 
  private AvailableKittens: Animal[] = [];
  private jsonIsRead = false;

  // List to manage user adopted  Kittens. 
  private userAdoptedKittens: Animal[] = [];

  // HttpClient Service injection to read json
  private http = inject(HttpClient)

  // Json Read
  getJsonKittensAndPushToAvailableKittens(): void {
    // if not read
    if (!this.jsonIsRead) {
      // Json to read :
      const jsonKittensObservable = this.http.get<Animal[]>("assets/json/availablekittens.json");
      // With subscribe retrieve Kittens array
      jsonKittensObservable.subscribe((jsonResult) => {
        // Json kittens result
        this.AvailableKittens = jsonResult;
        // Json Kittens result on kittens
        this.jsonIsRead = true;
      });
    }
  }

  getAvailableKittens(): Animal[] {
    // Available kittens
    return this.AvailableKittens;
  }

  addAvailableKitten(kitten: Animal) {
    this.AvailableKittens.push(kitten);
  }

  removeAvailableKitten(kitten: number) {
    this.AvailableKittens.splice(kitten, 1)
  }

  getAdoptedKittens(): Animal[] {
    // Getting user's adopted kittens
    return this.userAdoptedKittens;
  }

  addAdoptedKitten(kitten: Animal) {
    // Push adopted kitten
    this.userAdoptedKittens.push(kitten);
  }

  constructor() { }

  ngOnInit(): void { }

}
