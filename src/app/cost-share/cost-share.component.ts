import { GlobalService } from './../common/services/global.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cost-share',
  templateUrl: './cost-share.component.html',
  styleUrls: ['./cost-share.component.css']
})
export class CostShareComponent implements OnInit {

  constructor(private _http : GlobalService) {
      this._http.getRequest("").subscribe(
        data =>{ 
          console.log(data);
        },
        error=>{
          console.log("error");
        }
      )
   }

  ngOnInit() {
  }

}
