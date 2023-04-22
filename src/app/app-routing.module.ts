import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./ui/general/general.module').then(m => m.GeneralModule)
  },
  {
    path:'user',
    loadChildren: () => import('./ui/user/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
