import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/barrels';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | undefined;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }
}
