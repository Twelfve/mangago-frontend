import { Component, HostListener } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { UserSessionService } from '../../../services/userSession/userSession.service';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { firstValueFrom } from 'rxjs';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isEmailVerified$ = this.userSessionService.isEmailVerified$;

  showVerifyEmailMessage: boolean = true;

  showSideBar: boolean = false;
  username$ = this.userSessionService.username$;

  showPopover: boolean = false;

  constructor(private router: Router, private userSessionService: UserSessionService, private authService: AuthService) { }

  async ngOnInit() {
    try {
      const res = await firstValueFrom(this.isEmailVerified$);
      if (!res) {
      }
    } catch (error) {

    }
  }

  async logOut(){
    try {
      const res = await firstValueFrom(this.authService.logOut());
      this.userSessionService.unloadSession();
      window.location.reload();
    } catch (error) {
      console.log('error', error);

    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if(!(event.target as HTMLElement).closest('li')) {
      this.showPopover = false;
    }
  }

  navigateToLogin() {
    this.router.navigateByUrl('/login');
    this.showSideBar = false;
  }

  navigateToSignUp() {
    this.router.navigateByUrl('/signup');
    this.showSideBar = false;
  }

  navigateToMyProfile() {
    this.router.navigateByUrl('profile/my-profile');
    this.showSideBar = false;
  }

  navigateToVerifyEmail(){
    this.router.navigateByUrl('/verify-email');
  }

  closeVerifyEmailMessage(){
    this.showVerifyEmailMessage = false
  }

  navigateToSell(){
    this.router.navigateByUrl('/sell');
  }

}
