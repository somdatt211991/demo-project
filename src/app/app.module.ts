import { HttpModule } from '@angular/http';
import { GlobalService } from './common/services/global.service';
import { ROUTES } from './app.routes';
import { CostShareNavigationComponent } from './common/component/cost-share-navigation/cost-share-navigation.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,PreloadAllModules} from '@angular/router';
import { CostShareComponent } from './cost-share/cost-share.component';
import { HeaderComponent } from './common/header/header.component';
import { CostShareSetUpComponent } from './common/component/cost-share-set-up/cost-share-set-up.component';
import { CoInsuranceComponent } from './common/component/co-insurance/co-insurance.component';



@NgModule({
  declarations: [
    AppComponent,
    CostShareComponent,
    CostShareNavigationComponent,
    HeaderComponent,
    CostShareSetUpComponent,
    CoInsuranceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    HttpModule 

  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
