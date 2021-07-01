import { Component, Input } from '@angular/core';
import { IEvent } from 'src/app/barrels';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css'],
})
export class EventThumbnailComponent {
  @Input() detail!: IEvent;

  getStartTimeClass() {
    //Uma das alternativas
    const isEarlyStart = this.detail && this.detail.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
    //Alternativa 02
    // if (this.detail && this.detail.time === '8:00 am') return ['green', 'bold'];
    // return [];
  }
}
