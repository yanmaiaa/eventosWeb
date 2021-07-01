import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  Error404Component,
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListComponent,
} from './barrels';

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  }, //Para previnir o usuário de sair de uma página o avisando na hora quando tentar sair e estiver por exemplo, preenchendo um formulário. Podemos usar uma função ou um serviço
  { path: 'events', component: EventListComponent },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
