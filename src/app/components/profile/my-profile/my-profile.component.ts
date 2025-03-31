import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { UserSessionService } from '../../../services/userSession/userSession.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [SharedModule, HeaderComponent],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent {
  isEmailVerified$ = this.userSessionService.isEmailVerified$;

  showVerifyEmailMessage: boolean = true;

  constructor(private userSessionService: UserSessionService, private router: Router) { }

  async ngOnInit() {
    try {
      const res = await firstValueFrom(this.isEmailVerified$);
      if (!res) {
      }
    } catch (error) {

    }
  }

  navigateToVerifyEmail(){
    this.router.navigateByUrl('/verify-email');
  }

  navigateToPersonalData(){
    this.router.navigateByUrl('profile/personal-data');
  }

  closeVerifyEmailMessage(){
    this.showVerifyEmailMessage = false
  }
}
