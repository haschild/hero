import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './form.component';

// 这里只能指定是路由，而不是路由器
export const formRouter: Routes = [
  { path: 'form', component: FormComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(formRouter),
  ],
  declarations: []
})
export class FormModule { }
