import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../../types/response';
import { API_ROUTES } from '../../routes/api.routes';
import { ILoginPayload } from '../../types/payload';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { BehaviorSubject, firstValueFrom, map } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  private isEmailVerified = new BehaviorSubject<boolean | undefined>(undefined);
  isEmailVerified$ = this.isEmailVerified.asObservable();

  private username = new BehaviorSubject<string | undefined>(undefined);
  username$ = this.username.asObservable();

  private userData = new BehaviorSubject<any | undefined>(undefined);
  userData$ = this.userData.asObservable();

  constructor(private authService: AuthService, private router: Router) { }

  async loadSession(){
    try {
      const res = await firstValueFrom(this.authService.getSession());
      console.log('res', res);

      this.isEmailVerified.next(res.data.isEmailConfirmed);
      this.username.next(res.data.username);
      this.userData.next(res.data);
    } catch (error: any) {
      console.log('errorSeession', error);
      if (error.status === 401) {
        try {
          await firstValueFrom(this.authService.refreshToken());
          await this.loadSession();
          window.location.reload();
        } catch (error) {
          this.isEmailVerified.next(undefined);
          this.username.next(undefined);
        }
      }
      this.isEmailVerified.next(undefined);
      this.username.next(undefined);
    }
  }

  async refreshSession(){
    await this.loadSession();
  }

  async unloadSession(){
    this.isEmailVerified.next(undefined);
    this.username.next(undefined);
  }

}
