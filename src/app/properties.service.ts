import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './reservations.service';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
    constructor(private http: HttpClient) { 
    }

    public getProperties(): Observable<Property[]>
    {
      return this.http.get<Property[]>('http://localhost:3000/properties');
    }

    public createProperty(body: CreatePropertyBody): Observable<Property>
    {
      return this.http.post<Property>('http://localhost:3000/properties', body)
    }

    public editProperty(propertyId: number, body: EditPropertyBody): Observable<Property>
    {
      return this.http.patch<Property>(`http://localhost:3000/properties/${propertyId}`, body)
    }

    public searchProperties(textProperty: string): Observable<Property[]>{
      return this.http.get<Property[]>(`http://localhost:3000/properties?q=${textProperty}`);
    }
    
    public getProperty(propertyId: number):Observable<Property>{
      return this.http.get<Property>(`http://localhost:3000/properties/${propertyId}?_embed=reservations`)
    }

}
export interface Property {
  id: number;
  name: string;
  description: string;
  address: string;
  photos: string[];
  facilities: string[];
  maximGuest: number;
  price: number;
  extraGuest: number;
  discount: {
    type: string;
    amount: number;
  };
  reservations?: Reservation[];
}

export interface CreatePropertyBody {
  name: string;
  description: string;
  address: string;
  photos: string[];
  facilities: string[];
  maximGuest: number;
  price: number;
  extraGuest: number;
}

export interface EditPropertyBody {
  name: string;
  description: string;
  address: string;
  photos: string[];
  facilities: string[];
  maximGuest: number;
  price: number;
  discount: {
    type: string;
    amount: number;
  };
}
