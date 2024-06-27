import { Injectable, inject } from '@angular/core';
import { Kitten } from '../../model/kitten/kitten';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { table } from 'console';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  // List available Kittens. 
  private AvailableKittens: Kitten[] = [];
  private jsonIsRead = false;

  // List to manage user adopted  Kittens. 
  private userAdoptedKittens: Kitten[] = [];

  // HttpClient Service injection to read json
  private http = inject(HttpClient)

  // Json Read
  getJsonKittensAndPushToAvailableKittens(): void {
    // if not read
    if (!this.jsonIsRead) {
      // Json to read :
      const jsonKittensObservable = this.http.get<Kitten[]>("assets/json/availablekittens.json");
      // With subscribe retrieve Kittens array
      jsonKittensObservable.subscribe((jsonResult) => {
        // Json kittens result
        this.AvailableKittens = jsonResult;
        // Json Kittens result on kittens
        this.jsonIsRead = true;
      });
    }
  }

  getAvailableKittens(): Kitten[] {
    // Available kittens
    return this.AvailableKittens;
  }

  addAvailableKitten(kitten: Kitten) {
    this.AvailableKittens.push(kitten);
  }

  removeAvailableKitten(kitten: number) {
    this.AvailableKittens.splice(kitten, 1)
  }

  getAdoptedKittens(): Kitten[] {
    // Getting user's adopted kittens
    return this.userAdoptedKittens;
  }

  addAdoptedKitten(kitten: Kitten) {
    // Push adopted kitten
    this.userAdoptedKittens.push(kitten);
  }

  constructor() { }

  ngOnInit(): void { }

}
