import { Component, inject, Input } from '@angular/core';
import { SlideInterface } from '../../../types/slide.interface';
import { NgFor, NgStyle } from '@angular/common';
import { Animal } from '../../../../../model/animal/animal';
import { KittensService } from '../../../../../services/kittens.service';

@Component({
  selector: 'app-imageslider',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.scss'
})
export class ImagesliderComponent {
  kittensSvc : KittensService = inject(KittensService);

  
  getAvailablesKittens(): Animal[]{
    console.log(" slide kittens" ,this.kittensSvc.getAvailableKittens())
    return this.kittensSvc.getAvailableKittens();
  }

  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;

  getCurrentSlideUrl() {
    console.log(`Current index url : url(${this.slides[this.currentIndex].url})`)
    return `url('${this.slides[this.currentIndex].url}')`;
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide 
    ? this.slides.length - 1 
    : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide 
    ? 0 
    : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }
}
