import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';

declare let toastr: any;

//As diretivas ngFor colocada são para mudar a estrutura de um html, não vai fazer desaparecer, ela apenas adiciona ou remove
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events!: any[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}