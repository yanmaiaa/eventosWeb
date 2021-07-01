import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from 'src/app/barrels';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExistis = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExistis) this.router.navigate(['/404']);
    return eventExistis;
  }
}
