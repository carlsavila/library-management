import { Component, inject } from '@angular/core';
import { KittensService } from '../../service/service/kittens.service';
import { Kitten } from '../../model/kitten/kitten';
import { KittenComponent } from '../../components/kitten/kitten.component';
import { NewkittenComponent } from '../../components/newkitten/newkitten/newkitten.component';
import { UserComponent } from '../user/user/user.component';

@Component({
  selector: 'app-kittens',
  standalone: true,
  imports: [KittenComponent, NewkittenComponent, UserComponent],
  templateUrl: './kittens.component.html',
  styleUrl: './kittens.component.scss'
})
export class KittensComponent {

  // kitten service
  private kittenService: KittensService = inject(KittensService);


  // List to welcome new added Kittens. 
  availableKittens: Kitten[] = [];

  ngOnInit() {
    this.availableKittens = this.kittenService.kittens;

    // view port : person
    //console.log("viewportWidth = ", window.innerWidth);
   // console.log("viewportHeight = ", window.innerHeight);
    //console.log("value of the Windows pixel density", window.devicePixelRatio)
    //console.log("value of the Windows pixel density", window.devicePixelRatio)

  }
  // To add new received kitten from create-kitten @Output, sent by the form-kitten
  addNewReceivedKitten(event: Kitten) {
    console.log("adding new received created kitten by create-kitten received by simultaneously the form-kitten")
    this.availableKittens.push(event);
  }

  // List to Manage Users adopted  Kittens. 
  userAdoptedKittens: Kitten[] = [];

  deletedElement!: Kitten[];
  //to send adopted kitten to user
  sendAdoptedKittenToUser(id: number) {
    console.log(`Sent adopted kitten, id : ${id} to user`)
    /*
        // PI: e.g. other find kitten function
        const kittenToGiveToUser = this.availableKittens.find(
          (sentkitten) => sentkitten.id === id
        );
    */
    // Méthode mapping kitten
    this.availableKittens.map(
      (kittenElement: Kitten) => {
        if (kittenElement.id === id) {
          console.log(`Matched kitten ID : ${id} to send to user kitten list`);
          this.userAdoptedKittens.push(kittenElement);
          console.log(`kitten pushed : ${kittenElement.name, kittenElement.id}`);

          const indexOfItem = this.availableKittens.indexOf(kittenElement);
          console.log(`Index : ${indexOfItem} of retrived kitten to remove available kittens list`);
          // delete from list
          this.deletedElement = this.availableKittens.splice(indexOfItem, 1)
          console.log(`Kitten delete result : ${this.deletedElement}`);

          alert("Et voilà! Pour la vie! :)")
        }
      })
  }

}
