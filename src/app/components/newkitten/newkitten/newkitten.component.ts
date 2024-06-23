import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../../../model/kitten/kitten';
import { FormComponent } from '../../form/form.component';

@Component({
  selector: 'app-newkitten',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './newkitten.component.html',
  styleUrl: './newkitten.component.scss'
})
export class NewkittenComponent {

  toReceiveNewKitten!: Kitten;
  //Préparing @Output to send the recieved kitten to list-kitten'list
  @Output()
  createKittenEmitter: EventEmitter<Kitten> = new EventEmitter();

  nameLabel : string= "Nom ";
  ageLabel : string= "Race ";
  namePlaceHolder : string= "son nom";
  agePlaceHolder : string= "sa race";


  gettingNewKitten (event: any) {
    console.log("receiving new created kitten got from form-kitten");
    this.toReceiveNewKitten = event;
    // sending new received kitten to list-kitten
    this.createKittenEmitter.emit(event);
  }

  // To send the shared above Kittens List
  sendKittenToAvailabeKittenList(): void {
    console.log("Sending Avalaible Kettins List to Parents")
    this.createKittenEmitter.emit(this.toReceiveNewKitten);
  }
}
