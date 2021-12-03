import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsListComponent} from './events-list/events-list.component';
const routes: Routes = [
{
  path: "",
  component: EventsListComponent
}



];



export class Location {
  address?:string;
  city?: string;
  country?: string;



}

export class Event {
  name?:string;
  date?:string;
  time?: string;
  location?: Location;


}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 






}
