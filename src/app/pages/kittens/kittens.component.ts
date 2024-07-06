import { Component, inject,  } from '@angular/core';
import { KittensService } from '../../services/kittens.service';
import { Animal } from '../../model/animal/animal';
import { KittenComponent } from '../../components/kitten/kitten.component';
import { ImagesliderComponent } from '../../components/imageslider/imageslider/imageslider.component';
import { SlideInterface } from '../../components/imageslider/types/slide.interface';

@Component({
  selector: 'app-kittens',
  standalone: true,
  imports: [KittenComponent, ImagesliderComponent],
  templateUrl: './kittens.component.html',
  styleUrl: './kittens.component.scss'
})
export class KittensComponent {

  private kittenService: KittensService = inject(KittensService);
  slide: SlideInterface = { url: "" , title: '' }
  slides: SlideInterface[] = [];

  matchSlideAndKitten() {
    this.kittenService.getAvailableKittens().forEach(kittenItem => {
      console.log("KITTENS MATCH ", kittenItem)
        const toto = kittenItem.image;
        const tata = kittenItem.name;
        this.slide = { url: toto, title: tata};
        this.slides.push(this.slide);
    });
  }

  getServiceKittenJsonKittens(): void {
    this.kittenService.getJsonKittensAndPushToAvailableKittens();
  }

  getServiceKittenAvailableKittens(): Animal[] {
    return this.kittenService.getAvailableKittens();
  }

  addNewAvailableKitten(event: Animal) {
    this.kittenService.addAvailableKitten(event);
  }

  addAdoptedKittenToUserKittenLis(kittenIndex: number) {
    this.kittenService.getAvailableKittens().find(
      (kittenItem, index) => {

        if (index === kittenIndex) {
          this.kittenService.addAdoptedKitten(kittenItem);

          const indexOfItem = this.kittenService.getAvailableKittens().indexOf(kittenItem);
          this.kittenService.removeAvailableKitten(indexOfItem);

          alert("Et voilà! Pour la vie ! 😀")
        }
      })
  }

  getServiceKittenAdoptedKitten(): Animal[] {
    return this.kittenService.getAdoptedKittens();
  }

  ngOnInit() {
    this.getServiceKittenJsonKittens();
    this.kittenService.getAdoptedKittens();
    this.matchSlideAndKitten();
  }
}
