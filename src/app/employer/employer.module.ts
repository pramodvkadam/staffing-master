import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployerRoutingModule } from './employer-routing.module';
import { SideBarComponent } from './common/side-bar.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { NotificationComponent } from './common/notification.component';
import { NotificationsComponent } from './common/notifications.component';
import { IndexComponent } from './index.component';

@NgModule({
  imports: [
    CommonModule,
    EmployerRoutingModule
  ],
  declarations: [SideBarComponent, HeaderComponent, FooterComponent, NotificationComponent, NotificationsComponent, IndexComponent]
})
export class EmployerModule { }
