import { Component, inject, Input } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';
import { KittensService } from '../../../services/kittens.service';

@Component({
  selector: 'app-imageslider',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.scss'
})
export class ImagesliderComponent {

  kittensSvc: KittensService = inject(KittensService);

  getKittensImages(): string[] {
    return this.kittensSvc.getSliderCurrentIndexImage()
  }

  currentIndex: number = 0;

  getCurrentSlideUrl() {
    return `url('${this.kittensSvc.getSliderCurrentIndexImage()[this.currentIndex]}')`;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.kittensSvc.getSliderCurrentIndexImage().length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.kittensSvc.getSliderCurrentIndexImage().length - 1;
    const newIndex = isLastSlide
      ? 0
      : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  ngOnInit() {
    this.kittensSvc.getAvailableKittens()
    this.getKittensImages();
    this.getCurrentSlideUrl();
  }
}
