import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MtModule } from 'projects/mt/src/mt.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardButtonComponent } from './showcase/cardButton/cardButton.component';
import { JoinPipeComponent } from './showcase/joinPipe/joinPipe.component';

@NgModule({
  declarations: [AppComponent, JoinPipeComponent, CardButtonComponent],
  imports: [BrowserModule, AppRoutingModule, MtModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
