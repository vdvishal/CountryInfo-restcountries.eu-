import { Component, OnInit,ViewContainerRef} from '@angular/core';
import { AppService } from '../../app.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  public region: any = [];
  public showSpinner: boolean = true;
  constructor(public appservice: AppService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }


  ngOnInit() {

    this.appservice.getRegionList().subscribe(
      data => {
        this.showSpinner = false;
        this.region = data;
      },
      (err) => {

        this.toastr.error('some error occured');

      });
  }

}
