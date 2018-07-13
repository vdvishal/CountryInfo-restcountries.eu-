import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule} from '@angular/common/http';

import { AppService } from './app.service';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { RegionComponent } from './region/region.component';
import { CountryinfoComponent } from './countryinfo/countryinfo.component';

import { CountrylistModule } from './countrylist/countrylist.module';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { FiltersModule } from './filters/filters.module';
import { ViewTemplateModule } from './view-template/view-template.module';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CountryinfoComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CountrylistModule,
    FiltersModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ViewTemplateModule,
    RouterModule.forRoot([
      { path: 'home', component: LandingPageComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'region/:country.region/:country.alpha3Code', component:CountryinfoComponent},
      { path: '**',component: LandingPageComponent}
      ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
