import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KittensComponent } from '../kittens/kittens.component';
import { UserComponent } from '../../components/user/user.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, KittensComponent,UserComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
