import { Component, inject, Input } from '@angular/core';
import { SlideInterface } from '../types/slide.interface';
import { NgFor, NgStyle } from '@angular/common';
import { Animal } from '../../../model/animal/animal';
import { KittensService } from '../../../services/kittens.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-imageslider',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.scss'
})
export class ImagesliderComponent {

  kittensSvc: KittensService = inject(KittensService);

  // @Input() slides: SlideInterface[] = [];
  kittensImages: string[] = [];


  getKittensImages() {
    for (let kitten of this.kittensSvc.getAvailableKittens()) {
      this.kittensImages.push(kitten.image)
    }
  }

  currentIndex: number = 0;

  getCurrentSlideUrl() {
    console.log(`Current picture index ${this.currentIndex} of URL : ${this.kittensImages[this.currentIndex]}`)
    return `url('${this.kittensImages[this.currentIndex]}')`;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.kittensImages.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.kittensImages.length - 1;
    const newIndex = isLastSlide
      ? 0
      : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  ngOnInit() {
    this.getKittensImages();
    this.getCurrentSlideUrl();
  }
}
