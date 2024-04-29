import {Injectable} from "@angular/core";
import {Firestore, collectionData} from "@angular/fire/firestore";
import {collection,} from '@firebase/firestore'
import {Observable} from "rxjs";
import {User} from "../interface/user";
import {Personal} from "../interface/personal";

@Injectable({
  providedIn: 'root'
})

export class PersonalService {
  constructor(private firestore: Firestore) {
  }

  getPersonal(): Observable<Personal[]> {
    const userRef = collection(this.firestore, "personal");
    // @ts-ignore
    return collectionData(userRef, {idField: 'id'} as unknown as Observable<Personal[]>)
  }


}
