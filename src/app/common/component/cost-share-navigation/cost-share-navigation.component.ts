import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cost-share-navigation',
  templateUrl: './cost-share-navigation.component.html',
  styleUrls: ['./cost-share-navigation.component.css']
})
export class CostShareNavigationComponent implements OnInit {
  private costshare=[{heading:"Member Match / Eligibility ",status:"false",icon:"true", url:'#'},
                     {heading:"Provider Network Override",status:"false",icon:"", url:'#'},
                     {heading:"Pre-Authorization",status:"false",icon:"true", url:'#'},
                     {heading:"Service Categories",status:"false",icon:"", url:'#'},
                     {heading:"Plan Level Settings",status:"false",icon:"true", url:'#'},
                     {heading:"Cost Shares",status:"true",icon:"true", url:'/cost-share-setUp'},
                     {heading:"Special Processing",status:"false",icon:"", url:'#'},
                     {heading:"Third Party Liability",status:"false",icon:"", url:'#'}]
  constructor() { }

  ngOnInit() {
  }

}
