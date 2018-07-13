import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { AppService } from '../../app.service';

@Component({
  selector: 'app-currencyview',
  templateUrl: './currencyview.component.html',
  styleUrls: ['./currencyview.component.css']
})
export class CurrencyviewComponent implements OnInit {
  public country: any = [];
  showSpinner: boolean = true;

  constructor(private _route: ActivatedRoute, private router: Router, public AppService: AppService) { }

  ngOnInit() {

    let currencyPart = this._route.snapshot.paramMap.get("country.currencies[indexOf(country)].code");
    console.log(currencyPart);

    this.AppService.getInfoByCurrency(currencyPart).subscribe(
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
