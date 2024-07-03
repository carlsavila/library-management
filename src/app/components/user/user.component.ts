import { Component, Input, inject } from '@angular/core';
import { Animal } from '../../model/animal/animal';
import { KittenComponent } from '../kitten/kitten/kitten.component';
import { KittensService } from '../../services/kittens.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [KittenComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  userAdoptedKittens: Animal[] = [];

  private kittenService: KittensService = inject(KittensService);

  getServiceKittenAdoptedKitten(): Animal[] {
    return this.kittenService.getAdoptedKittens();
  }

  ngOnInit() {
    this.kittenService.getAdoptedKittens();
  }

}


