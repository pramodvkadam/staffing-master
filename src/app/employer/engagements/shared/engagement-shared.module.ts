import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestEngagementsComponent } from './latest-engagements.component';
import {EngagementService} from "../services/engagement.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [EngagementService],
  declarations: [LatestEngagementsComponent],
  exports: [LatestEngagementsComponent]
})
export class EngagementSharedModule { }
