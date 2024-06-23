import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input()
  label_e_firstname!: string;
  @Input()
  label_e_lastname!: string;
  @Input()
  placeHolder_e_firstname!: string;
  @Input()
  placeHolder_e_lastname!: string;


  e_firstname: string = "";
  e_lastname: string = "";
  e_sex: string = "";
  e_birthday: Date = new Date;
  e_picture: string = "";
  e_email: string = "";
  e_password: string = "";
  e_mobilNumber: string = "";

  // New user object to send to create-user login
  newUser?: Person;
  // New kitten object to send to create-user login
  newKitten?: Kitten;

  // EventEmitter to create user login
  @Output()
  newUserDataToEmit: EventEmitter<Person> = new EventEmitter();

  // EventEmitter to create user login
  @Output()
  newKittenDataToEmit: EventEmitter<Kitten> = new EventEmitter();

  // change Button color on submit
  btnStyle!: string;
  onSubmit(myForm: NgForm): void {
    const person = false;
    if (person) {
      console.log("Form submited. User added to the users List.")
      this.newUser = new Person(
        this.e_firstname,
        this.e_lastname,
        this.e_sex,
        this.e_birthday,
        this.e_email,
        this.e_password,
        this.e_mobilNumber,
        this.e_picture,
      );
      this.newUserDataToEmit.emit(this.newUser);

    } else {
      console.log("Form submited. Kitten added to the available kittens.")
      this.newKitten = new Kitten(
        this.e_firstname,
        this.e_lastname,
        this.e_birthday,
        this.e_picture);

      this.newKittenDataToEmit.emit(this.newKitten);
    }
    myForm.onReset();
    console.log("Form resetted and button \"envoyer\" deactived");

  }
}
