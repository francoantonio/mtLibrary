import { NgModule } from '@angular/core';
import { CardButtonModule } from './card-button/card-button.module';
import { MtJoinPipeModule } from './pipes/mt-join-pipe/mt-join-pipe.module';

@NgModule({
  declarations: [],
  imports: [MtJoinPipeModule, CardButtonModule],
  exports: [MtJoinPipeModule, CardButtonModule],
})
export class MtModule {}
