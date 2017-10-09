
import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class NotesService{

    constructor(private afDB:AngularFireDatabase, private afAuth: AngularFireAuth ){}

    notes=[];
      public getNotes(){
         // return this.notes;
         return this.afDB.list('notas/');
      }

      public getNote(id){
        //   return this.notes.filter(function(e,i){
        //       return e.id==id})[0]||{id:null,title:null,description:null
        //     };
        return this.afDB.object('notas/' + id);
      }
      public createNote(note){
          this.afDB.database.ref('notas/'+ note.id).set(note);          
         // this.notes.push(note);

      }

      public editNote(note){
        // for(let i=0;i<this.notes.length;i++){
        //     if (this.notes[i].id==note.id){
        //         this.notes[i]=note ;
        //     }
        // }
        this.afDB.database.ref('notas/'+ note.id).set(note);   

    }
    public deleteNote(note){
        // for(let i=0;i<this.notes.length;i++){
        //     if (this.notes[i].id==note.id){
        //         this.notes.splice(i,1);
        //     }
        // }
        this.afDB.database.ref('notas/'+ note.id).remove();   

    }
    cerrarSesion(){
        this.afAuth.auth.signOut();
        console.log("Logged out")
    }


    loginwithTwitch(){
      //  this.afAuth.auth.signInWithRedirect(new firebase)
    }
    verificarAuntenticacion(){
      //  this.afAuth.auth.onAuthStateChanged().subscribe((user: firebase.User) => { 
        // if (!user) {         
          //   this.displayName = null;        
            //  return;       }       
              //this.displayName = user.displayName;          
         //});
    }

}