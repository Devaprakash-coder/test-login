import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {SignUpComponent} from './sign-up/sign-up.component'
import {LoginComponent} from './login/login.component'
import {PostsComponent} from './posts/posts.component'
import {AppGuardGuard} from './app-guard.guard'




const routes : Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'posts', component: PostsComponent, canActivate: [AppGuardGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
