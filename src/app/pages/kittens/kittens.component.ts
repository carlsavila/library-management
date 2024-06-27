import { Component, inject } from '@angular/core';
import { KittensService } from '../../service/kittens/kittens.service';
import { Kitten } from '../../model/kitten/kitten';
import { KittenComponent } from '../../components/kitten/kitten.component';
import { NewkittenComponent } from '../../components/newkitten/newkitten/newkitten.component';
import { UserComponent } from '../user/user/user.component';
import { Item } from '../../model/item/item';

@Component({
  selector: 'app-kittens',
  standalone: true,
  imports: [KittenComponent, NewkittenComponent, UserComponent],
  templateUrl: './kittens.component.html',
  styleUrl: './kittens.component.scss'
})
export class KittensComponent {

  // KittensService injection (to get, add available kittens and adopted user's kitten(s)).
  private kittenService: KittensService = inject(KittensService);

  getServiceKittenJsonKittens(): void {
    console.log("Récupération Json Kittens : ")
    this.kittenService.getJsonKittensAndPushToAvailableKittens();
  }

  getServiceKittenAvailableKittens(): Kitten[] {
    return this.kittenService.getAvailableKittens();
  }

  // Function to add new kitten received from create-kitten's @Output, using the form
  addNewAvailableKitten(event: Kitten) {
    this.kittenService.addAvailableKitten(event);
  }

  // Funnction to send the adopted kitten to the user
  addAdoptedKittenToUserKittenLis(kittenIndex: number) {

    console.log("got index ", kittenIndex)
    // Searching the adopted kitten by id in available kittens list.
    this.kittenService.getAvailableKittens().find(
      (kittenItem, index) => {

        if (index === kittenIndex) {
          console.log("item ", Item, " of index ", index);
          // Adding found kitten to the user's adopted kitten.
          console.log("kitten found ", kittenItem)
          this.kittenService.addAdoptedKitten(kittenItem);

          const indexOfItem = this.kittenService.getAvailableKittens().indexOf(kittenItem);
          // Delete from list by element corresponding to the indexOfItem 
          this.kittenService.removeAvailableKitten(indexOfItem);

          alert("Et voilà! Pour la vie ! 😀")
        }
      })
  }

  getServiceKittenAdoptedKitten(): Kitten[] {
    return this.kittenService.getAdoptedKittens();
  }

  ngOnInit() {
    this.getServiceKittenJsonKittens();
    this.kittenService.getAdoptedKittens();
  }

}
