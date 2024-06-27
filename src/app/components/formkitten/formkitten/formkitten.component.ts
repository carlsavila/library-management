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
  kittenBirthDay: Date = new Date();
  kittenImage: string = "";

  // New kitten object to send to create-kitten
  newKitten?: Kitten;
  // EventEmitter to yo emit new kitten
  @Output()
  newKittenDataToChange: EventEmitter<Kitten> = new EventEmitter();

  // Button Style : color
  btnStyle!: string;
  onSubmit(myForm: NgForm): void {
    this.newKitten = new Kitten(
      this.kittenName,
      this.kittenRace,
      this.kittenBirthDay,
      this.kittenImage);

    this.newKittenDataToChange.emit(this.newKitten);

    // Reinits form
    myForm.onReset()
  }
}
