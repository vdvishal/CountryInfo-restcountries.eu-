import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageComponent } from './language/language.component';
import { ViewTemplateModule } from '../view-template/view-template.module';
import { RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import {ToastModule} from 'ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    CommonModule,
    ViewTemplateModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    RouterModule.forChild([
      { path: 'region', component: RegionComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'lang', component: LanguageComponent }
    ])
  ],
  declarations: [CurrencyComponent, LanguageComponent, RegionComponent, FilterPipe]
})
export class FiltersModule { }
