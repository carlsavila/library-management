import { Component, Input, inject } from '@angular/core';
import { Animal } from '../../model/animal/animal';
import { KittenComponent } from '../../components/kitten/kitten.component';
import { KittensService } from '../../services/kittens.service';

@Component({
  selector: 'app-user-kittens',
  standalone: true,
  imports: [KittenComponent],
  templateUrl: './user-kittens.component.html',
  styleUrl: './user-kittens.component.scss'
})
export class UserKittensComponent {

  userAdoptedKittens: Animal[] = [];

  private kittenService: KittensService = inject(KittensService);

  getServiceKittenAdoptedKitten(): Animal[] {
    return this.kittenService.getAdoptedKittens();
  }

  ngOnInit() {
    this.kittenService.getAdoptedKittens();
  }

}


