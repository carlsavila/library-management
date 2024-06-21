import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../../../model/kitten/kitten';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-formkitten',
  standalone: true,
  imports: [FormsModule,NgClass,CommonModule],
  templateUrl: './formkitten.component.html',
  styleUrl: './formkitten.component.scss'
})
export class FormkittenComponent {

  kittenId: number = 0;
  kittenName: string = "";
  kittenRace: string = "";
  kittenAge: Date = new Date();
  kittenImage: string = "";

  // New kitten object to send to create-kitten
  newKitten?: Kitten;
  // EventEmitter to create kitten
  @Output()
  newKittenDataToChange: EventEmitter<Kitten> = new EventEmitter();

  // change Button color on submit
  btnStyle!: string;
  onSubmit(myForm: NgForm): void {
    console.log("Submit du formulaire ajoute le chaton à la collection")
    console.log("Le bouton du formulaire change de couleur pour montrer que le formulaire est valide");
    this.newKitten = new Kitten(
      this.kittenName,
      this.kittenRace,
      this.kittenAge,
      this.kittenImage);

    this.newKittenDataToChange.emit(this.newKitten);

    myForm.onReset()
  }
}
