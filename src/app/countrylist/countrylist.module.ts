import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionviewComponent } from './regionview/regionview.component';
import { CurrencyviewComponent } from './currencyview/currencyview.component';
import { LanguageviewComponent } from './languageview/languageview.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewTemplateModule } from '../view-template/view-template.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';


@NgModule({
  imports: [
    CommonModule,
    ViewTemplateModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      { path: 'region/:info.region', component: RegionviewComponent },
      { path: 'currency/:country.currencies[indexOf(country)].code', component: CurrencyviewComponent },
      { path: 'lang/:country.languages[indexOf(names)].iso639_1', component: LanguageviewComponent }
    ])
  ],
  declarations: [RegionviewComponent, CurrencyviewComponent, LanguageviewComponent]
})
export class CountrylistModule { }
