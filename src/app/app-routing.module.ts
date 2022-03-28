import { HomeComponent } from './components/home/home.component';
import { PasswordComponent } from './components/password/password.component';
import { UsernameComponent } from './components/username/username.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationComponent } from './components/Notification/notification/notification.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'notification', component: NotificationComponent },
  { path: 'notification/mentions', component: NotificationComponent },
  {
    path: 'messaging', loadChildren: () => import('./modules/messaging/messaging.module')
      .then(m => m.MessagingModule)
  },
  { path: '', component:LandingPageComponent},
  {path:'username',component:UsernameComponent},
  {path:'password',component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
