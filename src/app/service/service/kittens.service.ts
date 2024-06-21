import { Injectable } from '@angular/core';
import { Kitten } from '../../model/kitten/kitten';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  public kittens:Kitten[] = [
    new Kitten(
      "La pair d'amour",
      "De la vrai",
      new Date(),
      "https://img.freepik.com/free-photo/close-up-kittens-exploring-nature_23-2150782397.jpg?t=st=1716318036~exp=1716321636~hmac=2b23bc9eeeaf697d7f7d936ba165a41bfdb606ab032753e4ccd0cb423728e775&w=1060"
    ),
    new Kitten(
      "Tu craques",
      "Pur Pur",
      new Date(),
      "https://img.freepik.com/free-photo/view-adorable-kitten-with-blanket_23-2150758122.jpg?t=st=1717007713~exp=1717011313~hmac=42702a3792f1d0968805db403aa0570e09c7db487697609de8839c43640091f8&w=1380"
    ),
    new Kitten(
      "Top mimi",
      "De la classe",
      new Date(),
      "https://img.freepik.com/free-photo/view-adorable-kitten-with-flowers_23-2150758003.jpg?t=st=1717007791~exp=1717011391~hmac=ef5f8972aa5cea0c6299757935fe60f43127c831e097dd6c2aacaccb41b6353a&w=900"
    ),
    new Kitten(
      "Le paquet ou rien",
      "La meilleur",
      new Date(),
      "https://img.freepik.com/premium-photo/group-adorable-kittens-cuddled-up-together-cozy-blanket-fort_776674-167000.jpg?w=826"
    ),
    new Kitten(
      "Pfff, tu m'as trouvé",
      "d'Amour",
      new Date(),
      "https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649172.jpg?t=st=1717007577~exp=1717011177~hmac=6cc552bc5deaa90d6793c568012a99609663adb179fa25206262dd768637d70f&w=900"
    ),

  ]
constructor() { }

}
