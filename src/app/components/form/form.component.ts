import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Person } from '../../model/person/person';
import { Kitten } from '../../model/kitten/kitten';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  e_usrFName_aName: string = "";
  e_usrLName_aRace: string = "";
  e_usr_aSex: string = "";
  e_usr_aBirthday: Date = new Date;
  e_usr_aPicture: string = "";
  e_usrEmail: string = "";
  e_usrPassword: string = "";
  e_usrMobilNumber: string = "";

  // New user object to send to create-user login
  newUser?: Person;
   // New kitten object to send to add to available kittens
  newKitten?: Kitten;
  // EventEmitter to register user login
  @Output()
  newUserDataToEmit: EventEmitter<Person> = new EventEmitter();
  // EventEmitter to add new kitten login
  @Output()
  newKittenDataToEmit: EventEmitter<Kitten> = new EventEmitter();

  // On submit, button color changes
  btnStyle!: string;
  isNewUser = false
  // Submit
  onSubmit(myForm: NgForm): void {

    console.log("DEBUG - Submit du formulaire ajoute de élément à la collection")
    console.log("DEBUG - Le bouton du formulaire change de couleur pour montrer que le formulaire est valide");

    if (this.isNewUser) {
      this.newUser = new Person(
        this.e_usrFName_aName,
        this.e_usrLName_aRace,
        this.e_usr_aSex,
        this.e_usr_aBirthday,
        this.e_usrEmail,
        this.e_usrPassword,
        this.e_usrMobilNumber,
        this.e_usr_aPicture,
      );

      this.newUserDataToEmit.emit(this.newUser);

    } else {
      this.newKitten = new Kitten(
        this.e_usrFName_aName,
        this.e_usrLName_aRace,
        this.e_usr_aBirthday,
        this.e_usr_aSex,
      );

      this.newKittenDataToEmit.emit(this.newKitten);
    }

    myForm.onReset()
  }

}
