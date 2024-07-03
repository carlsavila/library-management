import { Component, Input } from '@angular/core';
import { Animal } from '../../model/animal/animal';


@Component({
  selector: 'app-kitten',
  standalone: true,
  imports: [],
  templateUrl: './kitten.component.html',
  styleUrl: './kitten.component.scss'
})
export class KittenComponent {
  @Input()
  kittenCard!: Animal;

}
