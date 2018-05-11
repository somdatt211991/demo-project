import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'co-insurance',
  templateUrl: './co-insurance.component.html',
  styleUrls: ['./co-insurance.component.css']
})
export class CoInsuranceComponent implements OnInit {
  // private control ={
  //   occurences : true,
  //   addoccurences: false
  // }
  private coinsurance=[];
  private occurences = true;
  private levels= ['PTO','BCO', 'Out of Area', 'Other']; 
  private coinsurancestruct= {occurence:"",value:"",level:"",related_scenarios:"",actions:""};
  private addoccurences =false;
  private occurencecount ;
  private dynamicOccurance = [];
  private showTable = false;
  constructor() { }

  ngOnInit() {
  }
  showdata(){
    console.log(this.coinsurance);
  }
  ShowAddoccurences(data){
    this.occurences = !this.occurences;
     this.addoccurences = !this.addoccurences;
     var coninsNo =1000;
    
     for(var i=0; i<data.value; i++)
     {
      
       let cons = "COINS"+coninsNo.toString();
       this.coinsurance.push(this.coinsurancestruct);     
       this.coinsurance[i].occurence=cons;    
       coninsNo ++;
     }
     console.log(this.coinsurance);
     
  }

}
