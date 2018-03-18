import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import { CollapseModule } from 'ngx-bootstrap/collapse';


import { EmployerRoutingModule } from './employer-routing.module';
import { SideBarComponent } from './common/side-bar.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { NotificationsComponent } from './common/notifications.component';
import { IndexComponent } from './index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {JobsSharedModule} from "./jobs/shared/jobs.shared.module";
import {ApplicationsSharedModule} from "./applications/shared/applications-shared.module";
import {EngagementSharedModule} from "./engagements/shared/engagement-shared.module";

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule,
    MatExpansionModule,
      CollapseModule,
    JobsSharedModule,
    ApplicationsSharedModule,
    EngagementSharedModule
  ],
  declarations: [SideBarComponent,
    HeaderComponent,
    FooterComponent,
    NotificationsComponent,
    IndexComponent,
    DashboardComponent]
})
export class EmployerModule { }
