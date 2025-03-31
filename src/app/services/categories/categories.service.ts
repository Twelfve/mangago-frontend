import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../../types/response';
import { API_ROUTES } from '../../routes/api.routes';
import { ICategory } from '../../models/Category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  headers = new HttpHeaders({
    "ngrok-skip-browser-warning": "69420", // Replace with your actual header
    // Add more headers as needed
  });

  constructor(private http: HttpClient) { }


  getMainCategories() {
    return this.http.get<IResponse<ICategory[]>>(API_ROUTES.CATEGORIES.MAIN_CATEGORIES, {withCredentials: true, headers: this.headers});
  }

  getSubCategories(parentCategoryId: number){
    return this.http.get<IResponse<ICategory[]>>(API_ROUTES.CATEGORIES.SUBCATEGORIES.replace(':id', parentCategoryId.toString()), {withCredentials: true, headers: this.headers})
  }

  logOut(){
    return this.http.get<IResponse<any>>(API_ROUTES.AUTH.LOGOUT, {withCredentials: true, headers: this.headers})
  }

  forgotPasswordRequest(userIdentifier: string){
    return this.http.post<IResponse<any>>(API_ROUTES.AUTH.FORGOT_PASSWORD_REQUEST, {userIdentifier}, {withCredentials: true, headers: this.headers})
  }

}
