import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  ToastrService,
  EventListComponent,
  EventThumbnailComponent,
  EventRouteActivator,
  EventService,
  NavBarComponent,
  EventDetailsComponent,
  CreateEventComponent,
  Error404Component,
  AppComponent,
  AppRoutingModule,
} from './barrels';

@NgModule({
  declarations: [
    //declarar os components criados,pipes, diretivas etc
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    //Aqui é para importar outros módulos
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ], //Aqui são adcionados os serviços
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  return true;
}
