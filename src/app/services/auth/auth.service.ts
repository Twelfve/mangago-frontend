import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../../types/response';
import { API_ROUTES } from '../../routes/api.routes';
import { ILoginPayload, ISignupPayload } from '../../types/payload';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { map } from 'rxjs';
import { IUser } from '../../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "69420", // Replace with your actual header
    // Add more headers as needed
  });

  constructor(private http: HttpClient) { }


  login(payload: ILoginPayload) {
    return this.http.post<IResponse<IUser>>(API_ROUTES.AUTH.LOGIN, payload, {withCredentials: true, headers: this.headers});
  }

  logOut(){
    return this.http.get<IResponse<any>>(API_ROUTES.AUTH.LOGOUT, {withCredentials: true, headers: this.headers})
  }

  signup(payload: ISignupPayload){
    return this.http.post<IResponse<IUser>>(API_ROUTES.AUTH.SIGNUP, payload, {withCredentials: true, headers: this.headers})
  }

  verifyUsername(username: string) {
    return this.http.get<IResponse<any>>(API_ROUTES.AUTH.VERIFY_USERNAME.replace(':username', username), {withCredentials: true, headers: this.headers})
  }

  verifyEmail(code: string) {
    return this.http.post<IResponse<any>>(API_ROUTES.AUTH.VERIFY_EMAIL, {code}, {withCredentials: true, headers: this.headers})
  }

  resendEmailVerificationCode() {
    return this.http.get<IResponse<any>>(API_ROUTES.AUTH.RESEND_VERIFY_EMAIL, {withCredentials: true, headers: this.headers})
  }

  refreshToken() {
    // console.log('refresh token');

    return this.http.get(API_ROUTES.AUTH.REFRESH_TOKEN, {withCredentials: true, headers: this.headers})
  }

  verifyAccessToken() {
    // console.log('verify access token');
    return this.http.get(API_ROUTES.AUTH.TEST, {withCredentials: true, headers: this.headers})
  }

  getSession(){
    return this.http.get<IResponse<IUser>>(API_ROUTES.AUTH.GET_SESSION, {withCredentials: true, headers: this.headers})
  }

  forgotPasswordRequest(userIdentifier: string){
    return this.http.post<IResponse<any>>(API_ROUTES.AUTH.FORGOT_PASSWORD_REQUEST, {userIdentifier}, {withCredentials: true, headers: this.headers})
  }

  forgotPasswordSendCode(userIdentifier: string, code: string){
    return this.http.post<IResponse<any>>(API_ROUTES.AUTH.FORGOT_PASSWORD_SEND_CODE, {userIdentifier, code}, {withCredentials: true, headers: this.headers})
  }

  forgotPasswordReset(userIdentifier: string, password: string, code: string){
    return this.http.post<IResponse<any>>(API_ROUTES.AUTH.FORGOT_PASSWORD_RESET, {userIdentifier, password, code}, {withCredentials: true, headers: this.headers})
  }

}
