import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { YellowComponent } from './yellow/yellow.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { AppRoutingModule } from './/app-routing.module';
import{ TableHideShowComponent } from './table-hide-show/table-hide-show.component'


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BlueComponent,
    RedComponent,
    YellowComponent,
    TableComponentComponent,
    TableHideShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
