import { Component, OnInit,ViewContainerRef} from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppService } from '../../app.service';
import * as _ from "lodash";

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  public all: any = [];
  public lan: any = [];
  public lang: any = [];
  public lang1: any = [];
  public showSpinner: boolean = true;
  public show: boolean = false;
  public searchText: string;
  constructor(public appservice: AppService, private toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }


  ngOnInit() {
    this.appservice.getAll().subscribe(
      data => {
        this.showSpinner = false;
        this.all = data;

        for (let i of this.all) {
          for (let [key, value] of Object.entries(i)) {
            if (key === "languages") {
              this.lang.push(value);
            }
          }
        }
        for (let i of this.lang) {
          for (let x of i) {
            this.lan.push(x);
            this.lang1 = _.uniqBy(this.lan, "name");
            
          }
        }

        
      },
      (err) => {

        this.toastr.error('some error occured');

      });
    // this.filterLanguage();
    // this.search();
  }

  //  public search:any = () =>{
  //   this.show = !this.show
  //  }

  //  public filterLanguage:any = () => {

  //   }

}
