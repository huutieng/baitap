import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BanhangComponent } from './banhang/banhang.component';
import { KiemtraComponent } from './kiemtra/kiemtra.component';
import { NguyenhuutiengComponent } from './nguyenhuutieng/nguyenhuutieng.component';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { Product3Component } from './product3/product3.component';
import { Product4Component } from './product4/product4.component';
@NgModule({
  declarations: [
    AppComponent,
    BanhangComponent,
    KiemtraComponent,
    NguyenhuutiengComponent,
    Product1Component,
    Product2Component,
    Product3Component,
    Product4Component,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forRoot([ 
      { path: '', component: NguyenhuutiengComponent}, 
      { path: 'p1', component: Product1Component}, 
      { path: 'p2', component: Product2Component}, 
      { path: 'p3', component: Product3Component}, 
      { path: 'p4', component: Product4Component}, 
      { path: 'bh', component:BanhangComponent}, 
      { path: 'kt', component: KiemtraComponent}, 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }