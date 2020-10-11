import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './components/index/index.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {EventsComponent} from './components/events/events.component';
import {EventComponent} from './components/event/event.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AddEventComponent} from './components/add-event/add-event.component';
import {AddPlaceComponent} from './components/add-place/add-place.component';
import {AdminComponent} from './components/admin/admin.component';
import {FindComponent} from './components/find/find.component';
import {PlacesListComponent} from './components/places-list/places-list.component';


const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'addEvent', component: AddEventComponent},
  {path: 'addPlace', component: AddPlaceComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'find', component: FindComponent},
  {path: 'places', component: PlacesListComponent},
  {path: 'updatePlace/:id', component: AddPlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
