import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'msanii', component: MsaniiComponent },
  { path: 'accounting', component: AccountingComponent },
  { path: 'booknow', component: BooknowComponent },
  { path: 'beauty', component: BeautyComponent },
  { path: 'car', component: CarComponent },
  { path: 'education', component: EducationComponent },
  { path: 'event', component: EventComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'food', component: FoodComponent },
  { path: 'gardening', component: GardeningComponent },
  { path: 'health', component: HealthComponent },
  { path: 'homerenovation', component: HomerenovationComponent },
  { path: 'homeservices', component: HomeservicesComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'moving', component: MovingComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'realestate', component: RealestateComponent },
  { path: 'petcare', component: PetcareComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'travel', component: TravelComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

