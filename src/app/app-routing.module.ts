import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Angular2TokenService } from './services';

const routes: Routes = [
    { path: 'default' , component: SidebarComponent,  canActivate: [Angular2TokenService] },
	{ path: 'login' , component: LoginComponent },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
