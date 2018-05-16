import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { HeroDirectiveComponent } from './hero-directive/hero-directive.component';
import { MessageComponent } from './message/message.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'setcolor', component: HeroDirectiveComponent},
 { path: 'message', component: MessageComponent },
  { path: 'addHero', component: AddHeroComponent},
  //   :id 是一个占位符，用来接收参数
  { path: 'detail/:id', component: HeroDetailComponent }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {

}
