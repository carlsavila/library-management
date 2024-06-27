import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Person } from '../../model/person/person';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,FormsModule, NgClass],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  u_firstname: string = "";
  u_lastname: string = "";
  u_sex: string = "";
  u_email: string = "";
  u_password: string = "";
  u_birthday: Date = new Date;
  u_mobilNumber: string = "";
  u_picture: string = "";

  // New user object to send to create-user login
  newUser?: Person;
  // EventEmitter to create user login
  @Output()
  newUserDataToEmit : EventEmitter<Person> = new EventEmitter();

  // change Button color on submit
  btnStyle!: string;
  onSubmit(myForm: NgForm): void {
    console.log("DEBUG - Submit du formulaire ajoute de l'utilisateur à la collection")
    console.log("DEBUG - Le bouton du formulaire change de couleur pour montrer que le formulaire est valide");
    this.newUser = new Person(
      this. u_firstname,
      this. u_lastname,
      this. u_sex,
      this. u_birthday,
      this. u_email,
      this. u_password,
      this. u_mobilNumber,
      this. u_picture,
    );

    this.newUserDataToEmit.emit(this.newUser);
    myForm.onReset()
  }

}
