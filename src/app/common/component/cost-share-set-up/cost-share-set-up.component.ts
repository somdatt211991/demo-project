import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cost-share-set-up',
  templateUrl: './cost-share-set-up.component.html',
  styleUrls: ['./cost-share-set-up.component.css']
})
export class CostShareSetUpComponent implements OnInit {
  private costbreadcrumb = ["Coinsurance","Copay","OPX","Aggregate Max","Deductible","Processing Order",
                    "Processing Exception","Feeding Options","Accums Sharing"]
  constructor() { }

  ngOnInit() {
  }

}
