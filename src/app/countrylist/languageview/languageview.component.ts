import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { AppService } from '../../app.service';

@Component({
  selector: 'app-languageview',
  templateUrl: './languageview.component.html',
  styleUrls: ['./languageview.component.css']
})
export class LanguageviewComponent implements OnInit {
  public country: any = [];
  showSpinner: boolean = true;
  constructor(private _route: ActivatedRoute, private router: Router, public AppService: AppService) { }

  ngOnInit() {

    let languagePart = this._route.snapshot.paramMap.get("country.languages[indexOf(names)].iso639_1");
    console.log(languagePart);

    this.AppService.getInfoByLanguage(languagePart).subscribe(
      data => {
        this.showSpinner = false;
        this.country = data;
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }
}
