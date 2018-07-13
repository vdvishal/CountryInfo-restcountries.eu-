import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { AppService } from '../../app.service';


@Component({
  selector: 'app-regionview',
  templateUrl: './regionview.component.html',
  styleUrls: ['./regionview.component.css']
})
export class RegionviewComponent implements OnInit {

  public country: any = [];
  showSpinner: boolean = true;
  constructor(private _route: ActivatedRoute, private router: Router, public AppService: AppService) { }

  ngOnInit() {

    let regionPart = this._route.snapshot.paramMap.get("info.region");
    console.log(regionPart);

    this.AppService.getRegionInfo(regionPart).subscribe(
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
