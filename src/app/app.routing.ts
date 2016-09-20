
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RequestAccessComponent } from './request-access/request-access.component';
import { SignupComponent } from './signup/signup.component';
import { SuccessComponent } from './success/success.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'requestaccess', component: RequestAccessComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'success', component: SuccessComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
