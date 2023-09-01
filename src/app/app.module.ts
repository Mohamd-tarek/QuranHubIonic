import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { StateService } from './abstractions/services/stateService';
import { UserService } from "./abstractions/services/userService";
import { HomeService } from "./abstractions/services/homeService";
import { ProfileService } from "./abstractions/services/profileService";
import { AuthenticationService } from "./abstractions/services/authenticationService";
import { StateDataService } from "./services/stateDataService.service";
import { UserDataService } from "./services/userDataService.service";
import { HomeDataService } from "./services/homeDataService.service";
import { ProfileDataService } from "./services/profileDataService.service";
import { BasicAuthenticationService } from "./services/authentication.service";
import { AuthenticationGuard } from "./services/authentication.guard";
import { HttpXsrfInterceptor } from './HttpXsrfInterceptor';
import { WithCredentialsInterceptor } from './WithCredentialsInterceptor';
import { AuthenticationTokenInterceptor } from './AuthenticationTokenInterceptor';
import { ModelModule } from './models/model.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { TemplateModule } from './templateComponents/template.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { MainModule } from "./main/main.module";
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(), 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule,
    HttpClientXsrfModule,
    FormsModule,
    ModelModule,
    TemplateModule,
    AuthModule,
    SharedModule,
    MainModule,
    HomeModule,
    UserModule,
    ProfileModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: StateService, useClass: StateDataService },
    { provide: ProfileService, useClass: ProfileDataService },
    { provide: HomeService, useClass: HomeDataService },
    { provide: UserService, useClass: UserDataService },
    { provide: AuthenticationService, useClass: BasicAuthenticationService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpXsrfInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: WithCredentialsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationTokenInterceptor, multi: true },
     AuthenticationGuard,],
     bootstrap: [AppComponent],
})
export class AppModule {}
