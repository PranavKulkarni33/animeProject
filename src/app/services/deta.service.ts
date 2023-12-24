import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/compat/firestore';
import { Anime } from '../modal/anime';

@Injectable({
  providedIn: 'root'
})
export class DetaService {

  constructor(private afs: AngularFirestore) { }

  addAnime(anime: Anime) {
    anime.id = this.afs.createId();

    return this.afs.collection('/anime').add(anime)
      
      .catch((error) => {
        console.error('Error adding anime: ', error);
        throw error;
      });
  }

  getAllAnime() {
    return this.afs.collection('/anime').snapshotChanges();
  }

  deleteAnime(anime: Anime) {
    return this.afs.doc('anime/'+ anime.id).delete()
      .catch((error) => {
        console.error('Error deleting payroll: ', error);
        throw error;
      });
  }
}
