/* eslint-disable @typescript-eslint/naming-convention */
import { environment } from '../../environments/environment';
export const API_ROUTES = {
  AUTH: {
    LOGIN: `${environment.apiUrl}/user/login`,
    LOGOUT: `${environment.apiUrl}/user/logout`,
    REFRESH_TOKEN: `${environment.apiUrl}/user/refresh-token`,
    SIGNUP: `${environment.apiUrl}/user/signup`,
    TEST: `${environment.apiUrl}/user/test`,
    VERIFY_USERNAME: `${environment.apiUrl}/user/verify-username/:username`,
    VERIFY_EMAIL: `${environment.apiUrl}/user/verify-email/`,
    RESEND_VERIFY_EMAIL: `${environment.apiUrl}/user/resend-verification-email`,
    GET_SESSION: `${environment.apiUrl}/user/session`,
    FORGOT_PASSWORD_REQUEST: `${environment.apiUrl}/user/forgot-password-request`,
    FORGOT_PASSWORD_SEND_CODE: `${environment.apiUrl}/user/forgot-password-send-code`,
    FORGOT_PASSWORD_RESET: `${environment.apiUrl}/user/forgot-password-reset`,
  },
  USER: {
    GET_USER_BY_ID: `${environment.apiUrl}/user/user/:id`,
    UPDATE_USER: `${environment.apiUrl}/user/update-user`,
    UPDATE_PASSWORD: `${environment.apiUrl}/user/update-password`,
  },
  CATEGORIES: {
    MAIN_CATEGORIES: `${environment.apiUrl}/categories/main-categories`,
    SUBCATEGORIES: `${environment.apiUrl}/categories/subcategories/:id`,
    GET_PROPERTY_BY_ID: '/api/property/property/:id',
  },
  STATES: {
    GET_STATES: '/api/state',
  },
};
