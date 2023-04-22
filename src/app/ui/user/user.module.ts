import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PlotComponent } from './plot/plot.component';

const routes:Routes = [
  { path: 'details', component: UserDetailsComponent },

]

@NgModule({
  declarations: [
    UserDetailsComponent,
    PlotComponent
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    RouterModule,
    PlotComponent
  ]
})
export class UserModule { }
