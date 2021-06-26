import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrService } from './common/toastr.service';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { NavBarComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    //declarar os components criados,pipes, diretivas etc
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
  ],
  imports: [
    //Aqui é para importar outros módulos
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [EventService, ToastrService], //Aqui são adcionados os serviços
  bootstrap: [AppComponent],
})
export class AppModule {}
