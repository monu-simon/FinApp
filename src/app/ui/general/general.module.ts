import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RouterModule, Routes } from '@angular/router';
import { WorkingComponent } from './working/working.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: 'home', component: AboutComponent },
  { path: 'about', component: HomeComponent },
  { path: 'login',component: LoginComponent}
]

@NgModule({
  declarations: [HomeComponent, AboutComponent, WorkingComponent, LoginComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HomeComponent, AboutComponent,RouterModule,WorkingComponent]
})
export class GeneralModule {}
