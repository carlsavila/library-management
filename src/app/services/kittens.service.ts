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

  private slideCurrentIndex0Image!: string;

  getJsonKittensAndPushToAvailableKittens(): void {
    if (!this.isRead) {
      const jsonKittensObservable = this.http.get<Animal[]>("assets/json/availablekittens.json");
      jsonKittensObservable.subscribe((jsonResult) => {
        this.AvailableKittens = jsonResult;
        const currentindeximage = this.AvailableKittens[0].image
        console.log("Service const SLIDER Current index 0 IMAGE : ", currentindeximage)
        this.slideCurrentIndex0Image = currentindeximage;
        console.log("Service string SLIDER Current index 0 IMAGE : ", this.slideCurrentIndex0Image)
        this.isRead = true;
      });
    }
  }

  getSliderCurrentIndexImage0 (): string {
    return this.slideCurrentIndex0Image;
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
