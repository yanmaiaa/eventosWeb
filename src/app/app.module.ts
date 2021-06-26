import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventService } from './services/event.services';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, EventListComponent, EventThumbnailComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
