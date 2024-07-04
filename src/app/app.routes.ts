import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { KittensComponent } from './pages/kittens/kittens.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SigninupComponent } from './components/signinup/signinup.component';

export const routes: Routes = [
  {    path: 'accueil', component: HomeComponent, },
  {    path: 'menu',    component: MenuComponent,  },
  {    path: 'chatons',    component: KittensComponent,  },
  {    path: 'connexion/:formtype',    component: SigninupComponent,  },
  {    path: 'contact',    component: ContactComponent,  },
  {    path: 'apropos',    component: AboutComponent,  },
  {    path: '', redirectTo: '/accueil', pathMatch: 'full',  },
];
