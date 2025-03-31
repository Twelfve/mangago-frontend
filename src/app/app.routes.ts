import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';

export const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [AuthenticatedGuard]},
  {path: 'signup', component: SignupComponent, canActivate: [AuthenticatedGuard]},
  {path: 'verify-email', loadComponent: () =>
    import('./components/auth/verify-email/verify-email.component').then(m => m.VerifyEmailComponent),
    canActivate: [AuthGuard]
  },
  {path: 'forgot-password', loadComponent: () =>
    import('./components/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
    canActivate: [AuthenticatedGuard]
  },
  {path: 'profile/my-profile', loadComponent: () =>
    import('./components/profile/my-profile/my-profile.component').then(m => m.MyProfileComponent),
    canActivate: [AuthGuard]
  },
  {path: 'profile/personal-data', loadComponent: () =>
    import('./components/profile/personal-data/personal-data.component').then(m => m.PersonalDataComponent),
    canActivate: [AuthGuard]
  },
  {path: 'sell', loadComponent: () =>
    import('./components/sell/sell.component').then(m => m.SellComponent),
    canActivate: [AuthGuard]
  },

  // Wildcard route
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
