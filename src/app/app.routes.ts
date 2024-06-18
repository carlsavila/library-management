import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { KittensComponent } from './pages/kittens/kittens.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
  {    path: 'home',    component: HomeComponent,  },
  {    path: 'menu',    component: MenuComponent,  },
  {    path: 'kittens',    component: KittensComponent,  },
  {    path: 'signin',    component: SigninComponent,  },
  {    path: 'signup',    component: SignupComponent,  },
  {    path: 'contact',    component: ContactComponent,  },
  {    path: 'about',    component: AboutComponent,  },
  {    path: 'items',    component: ItemsComponent,  },
  {    path: '',    redirectTo: '/home',    pathMatch: 'full',  },
];
