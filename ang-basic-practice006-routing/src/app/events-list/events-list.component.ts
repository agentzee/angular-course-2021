import { Component, OnInit, Inject } from '@angular/core';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private es: EventService) { 
    
  }

  get eventsList() { return this.es.getAll();}
  ngOnInit(): void {

  }

}
