import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KittensComponent } from '../kittens/kittens.component';
import { UserKittensComponent } from '../user-kittens/user-kittens.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, KittensComponent,UserKittensComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
