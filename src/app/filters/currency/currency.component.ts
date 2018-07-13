import { Component, OnInit,ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppService } from '../../app.service';
import * as _ from "lodash";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  public all: any = [];
  public currency: any = [];
  public currencyN: any = [];
  public currencyF: any = [];
  public showSpinner: boolean = true;
  public show: boolean = false;
  public searchText: string = '';

  constructor(public AppService: AppService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }


  ngOnInit() {
    this.AppService.getAll().subscribe(
      data => {
        this.showSpinner = false;
        this.all = data;

        for (let i of this.all) {
          for (let [key, value] of Object.entries(i)) {
            if (key === "currencies") {
              this.currency.push(value);
            }
          }
        }

        for (let i of this.currency) {
          for (let x of i) {
            this.currencyN.push(x);
          }
        }

        this.currencyF = _.uniqBy(this.currencyN, "name");
        for (let i = this.currencyF.length - 1; i >= 0; --i) {
          if (this.currencyF[i].name == null || this.currencyF[i].name == undefined || this.currencyF[i].name == "[D]" || this.currencyF[i].name == '[E]' || this.currencyF[i].code == undefined) {
            this.currencyF.splice(i, 1);
          }
        }
        this.toastr.error('some error occured');
      },
      (err) => {

        this.toastr.error('some error occured');

      });
    // this.currencyFilter();
    // this.search();
  }

  //  public search:any = () =>{
  //   this.show = !this.show
  //  }

  // public currencyFilter:any = () => {


  // }
}
