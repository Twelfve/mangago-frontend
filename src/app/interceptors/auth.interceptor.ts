import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpInterceptorFn, HttpErrorResponse, HttpHandlerFn } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

export const AuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {

  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('authInterceptor');

  console.log('req.url', req.url);

  // Apply the interceptor only to API calls that are not verifyToken or refreshToken
  const isApiUrl = req.url.includes('/api'); // Adjust this based on your API path
  const isTokenRequest = req.url.includes('/user/test') || req.url.includes('/user/refresh-token') || req.url.includes('/user/session'); // Exclude specific token-related endpoints

  if (!isApiUrl || isTokenRequest) {
    // If it's not an API call or it's a token request, skip the interceptor
    return next(req);
  }


  // Handle API requests with token validation
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Handle token expiration, try refreshing the token
        return authService.refreshToken().pipe(
          switchMap(() => {
            // Retry the original request after token refresh
            return next(req);
          }),
          catchError((err: HttpErrorResponse) => {
            // If refresh fails, navigate to login
            if (err.status === 401){
              router.navigate(['/login']);
              return throwError(() => new Error('Token refresh failed'));
            }
            return next(req);
          })
        );
      } else {
        // Other errors
        return throwError(() => error);
      }
    })
  );
};
