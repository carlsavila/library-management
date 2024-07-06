import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Animal } from '../../../model/animal/animal';
import { Person } from '../../../model/person/person';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  // form inputs
  e_usrFName_aName: string = "";
  e_usrLName_aRace: string = "";
  e_usr_aSex: string = "";
  e_usr_aBirthday: Date = new Date;
  e_usr_aPicture: string = "";
  e_usrEmail: string = "";
  e_usrPassword: string = "";
  e_usrMobilNumber: string = "";

  // New Person object to send to "app-create-user".
  newUser?: Person;
  // EventEmitter to register user login.
  @Output() newUserDataToEmit: EventEmitter<Person> = new EventEmitter();

  // New Animal object to send to "app-kittens"
  newKitten?: Animal;
  // EventEmitter to add new kitten.
  @Output() newKittenDataToEmit: EventEmitter<Animal> = new EventEmitter();

  route: ActivatedRoute = inject(ActivatedRoute);
  //router: Router = inject(Router);

  @Input()
  formType?: string;

  // user or kitten form
  isUser!: boolean;

  // signin, signup
  isSignin: boolean= true;
  btnSignIn: string = "Connexion";
  btnSignUp: string = "S'incrire";

  signOnUp() {
    this.isSignin = !this.isSignin;
    this.btnSignIn = this.isSignin ? "S'incrire" : "Connexion";
    this.btnSignUp = this.isSignin ? "Connexion" : "S'incrire";
  }

  ngOnInit() {
    this.route.paramMap.subscribe(

      (paramMapResponse: ParamMap) => {
        // get form type (User, Kitten)
        this.formType = paramMapResponse.get("formtype") as string;
        this.isUser = ((this.formType == 'utilisateur') ? true : false);

        // form labels
        this.l_usrFName_aName = (this.isUser ? "Prénom " : "Nom");
        this.l_usrLName_aRace = (this.isUser ? "Nom " : " Race");
        this.l_usr_aMSex = (this.isUser ? "Homme" : "Mâle");
        this.l_usr_aFSex = (this.isUser ? "Femme " : "Femelle");

        // form placeholder
        this.p_usrFName_aName = (this.isUser ? "votre prénom " : "son nom");
        this.p_usrLName_aRace = (this.isUser ? "votre nom " : "sa race");
        this.p_usr_aPicture = "un lien vers" + (this.isUser ? " votre photo " : " sa photo")
      });

  }

  // On submit, button color changes
  btnStyle!: string;

  // form labels
  l_usrFName_aName: string = (this.isUser ? "Prénom " : "Nom");
  l_usrLName_aRace: string = (this.isUser ? "Nom " : " Race");
  l_usr_aMSex: string = (this.isUser ? "Homme" : "Mâle");
  l_usr_aFSex: string = (this.isUser ? "Femme " : "Femelle");

  // form placeholder
  p_usrFName_aName: string = (this.isUser ? "votre prénom " : "son nom");
  p_usrLName_aRace: string = (this.isUser ? "votre nom " : "sa race");
  p_usr_aPicture: string = "un lien vers" + (this.isUser ? " votre photo " : " sa photo");

  p_usrEmail: string = "votre email";
  p_usrPassword: string = "votre mot de passe";
  p_usrMobilNumber: string = "votre numéro de téléphone";


  // Submit
  onSubmit(myForm: NgForm): void {
    console.log("Boléan utilisateur ou non ", this.isUser);
    console.log("DEBUG - Submit du formulaire ajoute de élément à la collection")
    console.log("DEBUG - Le bouton du formulaire change de couleur pour montrer que le formulaire est valide");

    if (this.isUser) {
      this.newUser = new Person(
        this.e_usrFName_aName,
        this.e_usrLName_aRace,
        this.e_usr_aSex,
        this.e_usr_aBirthday,
        this.e_usrEmail,
        this.e_usrPassword,
        this.e_usrMobilNumber,
        this.e_usr_aPicture,
      );

      this.newUserDataToEmit.emit(this.newUser);

    } else {
      this.newKitten = new Animal(
        this.e_usrFName_aName,
        this.e_usrLName_aRace,
        this.e_usr_aBirthday,
        this.e_usr_aPicture,
      );

      this.newKittenDataToEmit.emit(this.newKitten);
    }

    myForm.onReset()
  }


}
