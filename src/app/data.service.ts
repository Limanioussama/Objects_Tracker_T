import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(AngularFireDatabase) private db: AngularFireDatabase) { }

  getData(): Observable<any> {
    return this.db.object('test').valueChanges();
  }
}
