import { Component, inject } from '@angular/core';
import { Animal } from '../../model/animal/animal';
import { KittensService } from '../../services/kittens.service';
import { KittenComponent } from '../kitten/kitten.component';

@Component({
  selector: 'app-userkittens',
  standalone: true,
  imports: [KittenComponent],
  templateUrl: './userkittens.component.html',
  styleUrl: './userkittens.component.scss'
})
export class UserkittensComponent {

  userAdoptedKittens: Animal[] = [];

  private kittenService: KittensService = inject(KittensService);

  getServiceKittenAdoptedKitten(): Animal[] {
    return this.kittenService.getAdoptedKittens();
  }

  ngOnInit() {
    this.kittenService.getAdoptedKittens();
  }
}
