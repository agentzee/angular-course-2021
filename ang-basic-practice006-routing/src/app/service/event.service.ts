import { Injectable } from '@angular/core';
import {Event} from '../app-routing.module';




@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

getAll() : Event[] {
  return [
    {name: 'New', date: 'Today', location: {address: '123', city: 'BP', country: 'HU'}, time: 'Now'}
  ];


}



}
