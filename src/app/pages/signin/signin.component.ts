import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {

}
