import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebApi } from './webapi/web-api';
import { MockWebApiService } from './webapi/mock-web-api-services';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: WebApi,
    useClass: MockWebApiService 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
