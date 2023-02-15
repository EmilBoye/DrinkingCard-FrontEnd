import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { NonalcoholComponent } from './nonalcohol/nonalcohol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { LoginComponent } from './login/login.component';
import { AlcoholAddDrinkComponent } from './alcohol/alcohol-add-drink/alcohol-add-drink.component';
import { AlcoholUpdateDrinkComponent } from './alcohol/alcohol-update-drink/alcohol-update-drink.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FrontpageComponent,
    LoginComponent,
    AlcoholAddDrinkComponent,
    AlcoholUpdateDrinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
