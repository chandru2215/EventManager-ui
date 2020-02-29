import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule}from'@angular/router';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEventComponent} from './components/add-event/add-event.component'

const routes: Routes = [
  {
    path:'events',
    component  : EventListComponent
  },{
    path:'addevents',
    component  : AddEventComponent
    
  }
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }