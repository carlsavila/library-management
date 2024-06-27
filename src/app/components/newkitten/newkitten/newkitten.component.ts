import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../../../model/kitten/kitten';
import { FormkittenComponent } from '../../formkitten/formkitten/formkitten.component';
import { FormComponent } from '../../form/form.component';


@Component({
  selector: 'app-newkitten',
  standalone: true,
  imports: [FormkittenComponent, FormComponent],
  templateUrl: './newkitten.component.html',
  styleUrl: './newkitten.component.scss'
})
export class NewkittenComponent {

  toReceiveNewKitten!: Kitten;
  //Préparing @Output to send the recieved kitten to list-kitten'list
  @Output()
  createKittenEmitter: EventEmitter<Kitten> = new EventEmitter();


  gettingNewKitten (event: Kitten) {
    this.toReceiveNewKitten = event;
    // sending new received kitten to list-kitten
    this.createKittenEmitter.emit(event);
  }

}
