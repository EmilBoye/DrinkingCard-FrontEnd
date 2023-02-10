import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol/alcohol-add-drink/alcohol-add-drink.component';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NonalcoholComponent } from './nonalcohol/nonalcohol.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/'},
  {
    path: 'hjem', component: FrontpageComponent,
  },
  {
    path: 'alko', component: AlcoholComponent
  },
  {
    path: 'alko/add', component: AlcoholAddDrinkComponent
  },
  {
    path: 'alkofri', component: NonalcoholComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, AlcoholComponent, NonalcoholComponent, AlcoholAddDrinkComponent]
