import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { KittensComponent } from './pages/kittens/kittens/kittens.component';
import { SigninComponent } from './components/signin/signin/signin.component';
import { SignupComponent } from './components/signup/signup/signup.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { AboutComponent } from './pages/about/about/about.component';

export const routes: Routes = [
  {    path: 'home', component: HomeComponent, },
  {    path: 'menu',    component: MenuComponent,  },
  {    path: 'kittens',    component: KittensComponent,  },
  {    path: 'signin',    component: SigninComponent,  },
  {    path: 'signup',    component: SignupComponent,  },
  {    path: 'contact',    component: ContactComponent,  },
  {    path: 'about',    component: AboutComponent,  },
  {    path: '', redirectTo: '/home', pathMatch: 'full',  },
];
