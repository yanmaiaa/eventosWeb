import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';
import { EventService } from '../shared/event.service';
import { IEvent } from 'src/app/barrels';

declare let toastr: any;

//As diretivas ngFor colocada são para mudar a estrutura de um html, não vai fazer desaparecer, ela apenas adiciona ou remove
@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
})
export class EventListComponent implements OnInit {
  events!: IEvent[];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
  handleThumbnailClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
