import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  public getReservations(): Observable<Reservation[]>
    {
      return this.http.get<Reservation[]>('http://localhost:3000/reservations');
    }
}
export interface Reservation {
  id: number;
  propertyId: number;
  nameGuest: string;
  numberOfGuests: number;
  addressOfGuest: string;
  telephoneOfGuest: string;
  emailOfGuest: string;
  totalPrice: number;
  checkIn: string;
  checkOut: string;
}