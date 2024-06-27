import { AfterContentInit, AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Kitten } from '../../../model/kitten/kitten';
import { KittenComponent } from '../../../components/kitten/kitten.component';
import { KittensComponent } from '../../kittens/kittens.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [KittenComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  // List to welcome adopted kitten by user.
  @Input()
  userAdoptedKittens: Kitten[] = [];

  constructor() { }
}
