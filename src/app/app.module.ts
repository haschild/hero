import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
@NgModule({
  declarations: [  // 组件、指令、管道（组件在被其它组件引用之前必须先在一个模块中声明过）
    HeroDetailComponent,
    AppComponent,
  ],
  imports: [  // 导入公共的模块
    BrowserModule,
    FormsModule
  ],
  providers: [],  // 导入服务
  bootstrap: [AppComponent]  // 根路径的入口
})
export class AppModule { }
