import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero-service';
import { MessageComponent } from './message/message.component';
import { MessageService } from './message-service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// 用于模拟数据使用
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroColorDirective } from './directive/hero-color.directive';
import { HeroDirectiveComponent } from './directive/hero-directive/hero-directive.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { UnlessDirective } from './directive/unless.directive';
import { PipeComponent } from './pipe/pipe.component';
import { ReplaceStrPipe } from './pipe/oneselfPipe';
import { AnimationComponent } from './animation/animation.component';
@NgModule({
  declarations: [ // 组件、指令、管道
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    MessageComponent,
    HeroSearchComponent,
    HeroColorDirective,
    HeroDetailComponent,
    DashboardComponent,
    AddHeroComponent,
    UnlessDirective,
    PipeComponent,
    HeroDirectiveComponent,
    AnimationComponent,
    ReplaceStrPipe
  ],
  imports: [  // 导入公共的模块
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [HeroService, MessageService, InMemoryDataService],  // 导入服务
  bootstrap: [AppComponent]  // 根路径的入口
})
export class AppModule { }
