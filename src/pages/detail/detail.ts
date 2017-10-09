import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ToastOptions, AlertController } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  //note = { id: null, title: null, description: null, tipo: null, os: null };
 note: any={};
  id: 0;

  toatsOption: ToastOptions

  constructor(public navCtrl: NavController, public navParams: NavParams, public notesSservice: NotesService, private toast: ToastController, public alertCtrl: AlertController) {
    this.id = navParams.get('id');
    console.log("id: ", this.id);
    this.obteneDetalle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  obteneDetalle(){
    if(this.id !=0){    
      this.notesSservice.getNote(this.id).valueChanges().subscribe((resp)=>{
        this.note=resp;
      });

    }
  }

  addNote() {
    if (this.id != 0) {
      this.notesSservice.editNote(this.note);

      this.toatsOption = {
        message: 'Se Modifico Correctamente!',
        duration: 3000,
        position: 'top',
        closeButtonText: 'cerrar',
        showCloseButton: true
      }

      this.toast.create(this.toatsOption).present();

    } else {
      this.note.id = Date.now();
      this.notesSservice.createNote(this.note);

      let alert = this.alertCtrl.create({
        title: 'Operacion',
        subTitle: 'Se Creo Correctamente la Nota!',
        buttons: ['OK']
      });
      alert.present();



    }
    this.navCtrl.pop();

  }
  deleteNote() {

    let confirm = this.alertCtrl.create({
      title: 'Notionic',
      message: 'Desea eliminar la Nota?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.notesSservice.deleteNote(this.note);
            this.navCtrl.pop();
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();




  }
}
