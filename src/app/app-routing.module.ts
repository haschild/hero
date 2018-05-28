import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component';
import { HeroDirectiveComponent } from './directive/hero-directive/hero-directive.component';
import { MessageComponent } from './message/message.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import {PipeComponent} from './pipe/pipe.component';
import { AnimationComponent } from './animation/animation.component';
import {FormComponent} from './form/form.component';

import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'setcolor', component: HeroDirectiveComponent},
  { path: 'message', component: MessageComponent },
  { path: 'addHero', component: AddHeroComponent},
  { path: 'pipe', component: PipeComponent },
  {path: 'animation' , component: AnimationComponent},
  {path: 'form', component: FormComponent},
  //   :id 是一个占位符，用来接收参数
  { path: 'detail/:id', component: HeroDetailComponent }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {

}
