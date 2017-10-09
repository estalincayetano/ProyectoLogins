import { NotesService } from './../../services/notes.service';
import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase/app';
  


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams, public notesService:NotesService,) {
  }

  async login() {
    try {

      const result = this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
      result.then((user) => {
        console.log(user);

        this.navCtrl.setRoot(HomePage);

      }).catch((e) => {
        console.log("ingrese el usuario y contraseña")
      })


    }
    catch (e) {
      console.log("ingrese el usuario y contraseña");
    }

  }

  register() {
    this.navCtrl.push("RegisterPage");
  }

  async loginwithgmail(){
    try{
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res=>{
        console.log(res)
        this.navCtrl.setRoot(HomePage);
      })
   /*   const result= this.afAuth.auth.signInWithRedirect( new firebase.auth.GoogleAuthProvider());
      result.then(()=>{this.afAuth.auth.getRedirectResult()
        console.log()
        
      }).catch((e) => {
        console.log(e)
      })
      this.navCtrl.setRoot(HomePage);*/
    }    catch (e) {
      console.log(e);
    }

}
async loginwithFacebook(){
this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
.then(res=>{
  console.log(res)
  this.navCtrl.setRoot(HomePage);
})
    
   /* this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()).then(res=>{
        console.log(res)
    });*/
}
}
