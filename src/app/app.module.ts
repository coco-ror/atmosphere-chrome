import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TypeaheadModule, AlertComponent, AlertConfig, AlertModule } from 'ngx-bootstrap';
import { LaddaModule } from 'angular2-ladda';

//import the route
import { AppRoutingModule }   from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotificationComponent } from './sidebar/notification/notification.component';
import { ExploreComponent } from './sidebar/explore/explore.component';
import { AtmosphereComponent } from './atmosphere/atmosphere.component';

//for services
import { NotificationService, ExploreService,InteractService, GeneralService, Angular2TokenService, AtmosphereService } from './services';

import { MixerComponent } from './custom/mixer/mixer.component';

//custom directives
import { AutoFocusDirective } from './custom/autofocus.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NotificationComponent,
    ExploreComponent,
    MixerComponent,
    AutoFocusDirective,
    AtmosphereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(), 
    LaddaModule
  ],
  providers: [
    NotificationService,
    ExploreService, 
    Angular2TokenService,
    GeneralService,
    InteractService,
    AtmosphereService,
    ExploreComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
