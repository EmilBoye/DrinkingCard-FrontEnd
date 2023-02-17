import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol/alcohol-add-drink/alcohol-add-drink.component';
import { AlcoholUpdateDrinkComponent } from './alcohol/alcohol-update-drink/alcohol-update-drink.component';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HeaderComponent } from './header/header.component';
import { NonalcoholComponent } from './nonalcohol/nonalcohol.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/'},
  {
    path: 'hjem', component: FrontpageComponent,
  },
  {
    path: 'alkohol', component: AlcoholComponent
  },
  {
    path: 'alkohol/tilføj', component: AlcoholAddDrinkComponent
  },
  {
    path: 'alkohol/opdater/:id' , component:AlcoholUpdateDrinkComponent
  },
  {
    path: 'alkoholfri', component: NonalcoholComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, AlcoholComponent, NonalcoholComponent, AlcoholAddDrinkComponent,]
