import { MaterialModule } from './dashboard/dashboard-page/material.module';
import { HttpBaseUrlInterceptorModule } from './http-base-url.interceptor';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard-page/dashboard.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StateModule } from '@workspace-nx-nestjs-ng/states';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    DashboardModule,
    HttpBaseUrlInterceptorModule,
    StateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [DashboardPageComponent],
})
export class AppModule { }
