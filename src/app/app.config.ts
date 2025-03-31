import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';
import SistemaPersonalFMYCBPreset from '../assets/presets/sistema-personal-FMYCB-preset';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: SistemaPersonalFMYCBPreset,
        options: {
          darkModeSelector: false || 'none'
        }
      }
      
    }),
    provideHttpClient(withFetch(), withInterceptors([AuthInterceptor]))],
};
