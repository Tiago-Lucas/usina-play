import {Injectable} from "@angular/core";
import {Firestore, collectionData} from "@angular/fire/firestore";
import {collection,} from '@firebase/firestore'
import {Observable} from "rxjs";
import {User} from "../interface/user";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private firestore: Firestore) {
  }

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, "user");
    // @ts-ignore
    return collectionData(userRef, {idField: 'id'} as unknown as Observable<User[]>)
  }


}
