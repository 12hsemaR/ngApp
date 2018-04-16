import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RedComponent} from './red/red.component';
import {BlueComponent} from './blue/blue.component';
import {YellowComponent} from './yellow/yellow.component';
import {TableHideShowComponent} from './table-hide-show/table-hide-show.component';

const routes: Routes =[
{path:'',redirectTo:'red',pathMatch:'full'},
{path:'red', component:RedComponent},
{path:'blue', component:BlueComponent},
{path:'yellow', component:YellowComponent},
{path:'table',component:TableHideShowComponent},
{path:'**',redirectTo:'red',pathMatch:'full'}

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
RouterModule
],
  declarations: []
})
export class AppRoutingModule { }
