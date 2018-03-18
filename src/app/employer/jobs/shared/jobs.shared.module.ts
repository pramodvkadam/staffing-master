import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestJobsComponent } from './latest-jobs/latest-jobs.component';
import {JobsService} from "../services/jobs.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LatestJobsComponent],
  providers:[JobsService],
  exports: [LatestJobsComponent]
})
export class JobsSharedModule { }
