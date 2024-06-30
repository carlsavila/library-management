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

  // List to welcome adopted kitten by user.
  userAdoptedKittens: Animal[] = [];

  // KittensService injection (to get, add available kittens and adopted user's kitten(s)).
  private kittenService: KittensService = inject(KittensService);

  getServiceKittenAdoptedKitten(): Animal[] {
    return this.kittenService.getAdoptedKittens();
  }

  ngOnInit() {
    this.kittenService.getAdoptedKittens();
  }

}


