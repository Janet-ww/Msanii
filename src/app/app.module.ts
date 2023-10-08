import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MsaniiComponent } from './msanii/msanii.component';
import { AccountingComponent } from './accounting/accounting.component';
import { BooknowComponent } from './booknow/booknow.component';
import { BeautyComponent } from './beauty/beauty.component';
import { CarComponent } from './car/car.component';
import { EducationComponent } from './education/education.component';
import { EventComponent } from './event/event.component';
import { FinancialComponent } from './financial/financial.component';
import { FoodComponent } from './food/food.component';
import { GardeningComponent } from './gardening/gardening.component';
import { HealthComponent } from './health/health.component';
import { HomerenovationComponent } from './homerenovation/homerenovation.component';
import { HomeservicesComponent } from './homeservices/homeservices.component';
import { MobileComponent } from './mobile/mobile.component';
import { MovingComponent } from './moving/moving.component';
import { PhotographyComponent } from './photography/photography.component';
import { RealestateComponent } from './realestate/realestate.component';
import { PetcareComponent } from './petcare/petcare.component';
import { TechnologyComponent } from './technology/technology.component';
import { TravelComponent } from './travel/travel.component';



/*const routes: Routes = [
  { path: 'msanii', component: MsaniiComponent }, // Define the route to MsaniiComponent
  // Add other routes as needed
];
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    MsaniiComponent,
    AccountingComponent,
    BooknowComponent,
    BeautyComponent,
    CarComponent,
    EducationComponent,
    EventComponent,
    FinancialComponent,
    FoodComponent,
    GardeningComponent,
    HealthComponent,
    HomerenovationComponent,
    HomeservicesComponent,
    MobileComponent,
    MovingComponent,
    PhotographyComponent,
    RealestateComponent,
    PetcareComponent,
    TechnologyComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
