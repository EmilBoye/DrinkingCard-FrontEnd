import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcoholComponent } from './alcohol/alcohol.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NonalcoholComponent } from './nonalcohol/nonalcohol.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/'},
  {
    path: 'hjem', component: HeaderComponent,
  },
  {
    path: 'alko', component: AlcoholComponent
  },
  {
    path: 'alkofri', component: NonalcoholComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HeaderComponent, AlcoholComponent, NonalcoholComponent]
