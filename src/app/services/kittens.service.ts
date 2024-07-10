import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/animal/animal';
import { Location, PlatformLocation } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  private AvailableKittens: Animal[] = [];
  private isRead = false;

  private userAdoptedKittens: Animal[] = [];

  private http = inject(HttpClient)

  platformLocation: PlatformLocation = inject(PlatformLocation);
  localhostHref!: string;

  getMyLocation() {
    console.log("DEBUG string - PlatformLocation href retrieved : ", this.platformLocation.href);
    this.localhostHref = this.platformLocation.protocol
      + "//"
      + this.platformLocation.hostname
      + ":"
      + this.platformLocation.port
      + "/";
    console.log("DEBUG string - Local Host Href string built  : ", this.localhostHref);
  }

  private AvailableKittensImages: string[] = [];

  getJsonKittensAndPushToAvailableKittens(): void {
    this.getMyLocation();
    console.log("DEBUG string - Local Host Href initizialed and next used with json : ", this.localhostHref);
    
    if (!this.isRead) {
      const jsonKittensObservable = this.http.get<Animal[]>(this.localhostHref + "assets/json/availablekittens.json");

      jsonKittensObservable.subscribe((jsonResult) => {
        this.AvailableKittens = jsonResult;
        jsonResult.forEach(element => {
          element.image
          this.AvailableKittensImages.push(element.image)
          console.log("DEBUG string - Service JSON Current IMAGE : ", element.image)
        });

        this.isRead = true;
      });
    }
  }

  getSliderCurrentIndexImage(): string[] {
    return this.AvailableKittensImages;
  }

  getAvailableKittens(): Animal[] {
    return this.AvailableKittens;
  }

  getAvailableKitten(index: number): Animal {
    return this.AvailableKittens[index];
  }

  addAvailableKitten(kitten: Animal) {
    this.AvailableKittens.push(kitten);
    this.AvailableKittensImages.push(kitten.image);
  }

  removeAvailableKitten(kitten: number) {
    this.AvailableKittens.splice(kitten, 1)
  }

  getAdoptedKittens(): Animal[] {
    return this.userAdoptedKittens;
  }

  addAdoptedKitten(kitten: Animal) {
    this.userAdoptedKittens.push(kitten);
  }

  constructor() { }

  ngOnInit(): void { }

}
