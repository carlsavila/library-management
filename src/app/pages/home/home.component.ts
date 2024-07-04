import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KittensComponent } from '../kittens/kittens.component';
import { PersonalComponent } from '../personal/personal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, KittensComponent, PersonalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
