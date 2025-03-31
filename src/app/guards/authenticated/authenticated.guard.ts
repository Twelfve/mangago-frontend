import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

export const AuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('authenticatedGuard');


  return authService.verifyAccessToken().pipe(
    map(() => {
      router.navigate(['/']);
      return false;
    }),
    catchError((error) => {
      return authService.refreshToken().pipe(
        map(() => {router.navigate(['/']); return false }),
        catchError((error) => {
          // router.navigate(['login']);
          // console.log('entre tonto');
          // console.log('error', error);

          return of(true); // Return an Observable that emits false
        })
      );
    })
  )
};
