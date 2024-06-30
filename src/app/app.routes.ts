import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { KittensComponent } from './pages/kittens/kittens.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {    path: 'home', component: HomeComponent, },
  {    path: 'menu',    component: MenuComponent,  },
  {    path: 'kittens',    component: KittensComponent,  },
  {    path: 'signin',    component: SigninComponent,  },
  {    path: 'user',    component: UserComponent,  },
  {    path: 'contact',    component: ContactComponent,  },
  {    path: 'about',    component: AboutComponent,  },
  {    path: 'signup',    component: SignupComponent,  },
  {    path: '', redirectTo: '/home', pathMatch: 'full',  },
];
