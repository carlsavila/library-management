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

  // New user object to send to create-user login
  newUser?: Person;
  // New kitten object to send to add to available kittens
  newKitten?: Animal;
  // EventEmitter to register user login
  @Output()
  newUserDataToEmit: EventEmitter<Person> = new EventEmitter();
  // EventEmitter to add new kitten login
  @Output()
  newKittenDataToEmit: EventEmitter<Animal> = new EventEmitter();

  route: ActivatedRoute = inject(ActivatedRoute);
  //router: Router = inject(Router);

  @Input()
  formType?: string;
  isUser!: boolean;

  ngOnInit() {
    this.route.paramMap.subscribe(
      (toto: ParamMap) => {
        console.log("type de formulaire du lien : ", toto.get("formtype"))
        this.formType = toto.get("formtype") as string;
        console.log("type de formulaire copié : ", this.formType)
        console.log("Is user : ", this.isUser)
        this.isUser = ((this.formType == 'utilisateur') ? true : false);
        console.log("Is user : ", this.isUser)

          // form labels
  this.l_usrFName_aName = (this.isUser ? "Prénom " : "Nom");
  this.l_usrLName_aRace = (this.isUser ? "Nom " : " Race");
  this.l_usr_aMSex = (this.isUser ? "Homme" : "Mâle");
  this.l_usr_aFSex = (this.isUser ? "Femme " : "Femelle");

    // form placeholder
    this.p_usrFName_aName = (this.isUser ? "votre prénom " : "son nom");
    this.p_usrLName_aRace = (this.isUser ? "votre nom " : "sa race");
    this.p_usr_aPicture = "un lien vers" + (this.isUser ? " votre photo " : " sa photo");
  

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
