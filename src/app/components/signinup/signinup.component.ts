import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form/form.component';

@Component({
  selector: 'app-signinup',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './signinup.component.html',
  styleUrl: './signinup.component.scss'
})
export class SigninupComponent {

formType: string = "utilisateur";

}
