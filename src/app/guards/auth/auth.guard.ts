import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('authGuard');

  return authService.verifyAccessToken().pipe(
    map(() => true),
    catchError((error) => {
      return authService.refreshToken().pipe(
        map(() => true),
        catchError(() => {
          // console.log('no debi entrar');

          router.navigate(['/login']);
          return of(false); // Return an Observable that emits false
        })
      );
    })
  )
};
