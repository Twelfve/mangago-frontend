import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUpdateUserPayload } from '../../types/payload';
import { IResponse } from '../../types/response';
import { API_ROUTES } from '../../routes/api.routes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  updateUserPersonalData(payload: IUpdateUserPayload) {
      return this.http.post<IResponse<any>>(API_ROUTES.USER.UPDATE_USER, {payload}, {withCredentials: true});
    }

}
