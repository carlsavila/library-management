import { Component } from '@angular/core';
import { UserkittensComponent } from '../../components/userkittens/userkittens.component';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [UserkittensComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {

}
