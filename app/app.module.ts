/**
 * Created by ���� on 2016/10/13.
 */

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//�����µ� AppComponent���,��������ӵ� NgModule װ�����е� declarations �� bootstrap �ֶ�
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
