import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }
  public createContact(newContact: Contact):Observable<Contact>{
    return this.http.post<Contact>("http://localhost:3000/contacts", newContact)
  }
}
export interface Contact{
  id?: number;
  name: string;
  reservationId?: number;
  telephone: string;
  email?: string;
  message?: string;

}