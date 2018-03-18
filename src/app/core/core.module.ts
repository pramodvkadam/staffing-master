import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule, AUTH_SERVICE, PUBLIC_FALLBACK_PAGE_URI, PROTECTED_FALLBACK_PAGE_URI} from "ngx-auth";
import {AuthenticationService} from "./authentication.service";

@NgModule({
  imports: [
    CommonModule,
    AuthModule
  ],
  providers: [
    { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
    { provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
    { provide: AUTH_SERVICE, useClass: AuthenticationService }
  ],
  declarations: []
})
export class CoreModule { }
