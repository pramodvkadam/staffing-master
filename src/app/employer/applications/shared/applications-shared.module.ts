import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestApplicationsComponent } from './latest-applications/latest-applications.component';
import {ApplicationsService} from "../services/applications.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers : [ApplicationsService],
  declarations: [LatestApplicationsComponent],
  exports: [LatestApplicationsComponent]
})
export class ApplicationsSharedModule { }
