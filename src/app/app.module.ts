import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero-service';
@NgModule({
  declarations: [  // 组件、指令、管道
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [  // 导入公共的模块
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService],  // 导入服务
  bootstrap: [AppComponent]  // 根路径的入口
})
export class AppModule { }
