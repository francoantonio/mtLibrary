import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardButtonComponent } from './showcase/cardButton/cardButton.component';
import { JoinPipeComponent } from './showcase/joinPipe/joinPipe.component';

const routes: Routes = [
  { path: 'mt-join-pipe', component: JoinPipeComponent },
  { path: 'mt-card-Button', component: CardButtonComponent },
  { path: '**', redirectTo: 'mt-join-pipe' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
