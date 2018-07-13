import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTemplateComponent } from './list-template/list-template.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ListTemplateComponent, LoaderComponent],
  exports: [
    ListTemplateComponent,
    LoaderComponent
  ]
})
export class ViewTemplateModule { }
