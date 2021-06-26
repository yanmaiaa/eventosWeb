import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent implements OnInit {
  @Input() detail: any;

  getStartTimeClass() {
    //Uma das alternativas
    const isEarlyStart = this.detail && this.detail.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }

  ngOnInit(): void {}
}
