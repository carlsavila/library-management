import { Component, Input } from '@angular/core';
import { Kitten } from '../../model/kitten/kitten';

@Component({
  selector: 'app-kitten',
  standalone: true,
  imports: [],
  templateUrl: './kitten.component.html',
  styleUrl: './kitten.component.scss'
})
export class KittenComponent {
  @Input()
  kittenCard!: Kitten;
}
