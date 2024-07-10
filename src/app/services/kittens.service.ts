import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  private AvailableKittens: Animal[] = [];
  private isRead = false;

  private userAdoptedKittens: Animal[] = [];

  private http = inject(HttpClient)


  private AvailableKittensImages: string[] = [];

  getJsonKittensAndPushToAvailableKittens(): void {
    if (!this.isRead) {
      const jsonKittensObservable = this.http.get<Animal[]>("assets/json/availablekittens.json");

      jsonKittensObservable.subscribe((jsonResult) => {
        this.AvailableKittens = jsonResult;
        jsonResult.forEach(element => {
          element.image
          this.AvailableKittensImages.push(element.image)
          console.log("Service JSON Current IMAGE : ", element.image)
        });

        console.log("Service  SLIDER IMAGES array : ", this.AvailableKittensImages)
        
        this.isRead = true;
      });
    }
  }

  getSliderCurrentIndexImage (): string[] {
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
