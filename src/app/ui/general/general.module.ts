import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [HomeComponent, AboutComponent,RouterModule]
})
export class GeneralModule {}
