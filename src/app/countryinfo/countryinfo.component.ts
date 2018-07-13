import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-countryinfo',
  templateUrl: './countryinfo.component.html',
  styleUrls: ['./countryinfo.component.css']
})
export class CountryinfoComponent implements OnInit{
  public country: any = [];
  showSpinner: boolean = true;
  constructor(private _route: ActivatedRoute, private router: Router, public AppService: AppService) { }

  ngOnInit() {
    let countryCode = this._route.snapshot.paramMap.get("country.alpha3Code");
    console.log(countryCode);

    this.AppService.getCountryInfo(countryCode).subscribe(
      data => {
        this.showSpinner = false;
        this.country = data;
      }
    )
  }

}

