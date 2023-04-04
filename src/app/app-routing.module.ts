import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholAddDrinkComponent } from './alcohol/alcohol-add-drink/alcohol-add-drink.component';
import { AlcoholUpdateDrinkComponent } from './alcohol/alcohol-update-drink/alcohol-update-drink.component';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { HeaderComponent } from './header/header.component';
import { NonalcoholAddDrinkComponent } from './nonalcohol/nonalcohol-add-drink/nonalcohol-add-drink.component';
import { NonalcoholUpdateDrinkComponent } from './nonalcohol/nonalcohol-update-drink/nonalcohol-update-drink.component';
import { NonalcoholComponent } from './nonalcohol/nonalcohol.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'hjem'},
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
  {
    path: 'alkoholfri/tilføj', component: NonalcoholAddDrinkComponent
  },
  {
    path: 'alkoholfri/opdater/:id', component: NonalcoholUpdateDrinkComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, AlcoholComponent, NonalcoholComponent, AlcoholAddDrinkComponent,]
