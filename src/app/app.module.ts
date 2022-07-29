import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateGoalComponent } from './pages/create-goal/create-goal.component';
import { DetailsGoalComponent } from './pages/details-goal/details-goal.component';
import { CreateRuleComponent } from './pages/create-rule/create-rule.component';
import { SimulationComponent } from './pages/simulation/simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    CreateGoalComponent,
    DetailsGoalComponent,
    CreateRuleComponent,
    SimulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
