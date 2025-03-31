import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { InputOtpModule } from 'primeng/inputotp';
import { AuthService } from '../../../services/auth/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserSessionService } from '../../../services/userSession/userSession.service';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [SharedModule, InputOtpModule, ToastModule],
  providers: [MessageService],
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.css'
})
export class VerifyEmailComponent {

  code: string = '';

  isEmailVerified$ = this.userSessionService.isEmailVerified$;

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
    private userSessionService: UserSessionService
  ) { }

  async ngOnInit() {
    try {
      const res = await firstValueFrom(this.isEmailVerified$);
      if (res === true) {
        this.router.navigate(['/']);
      }
    } catch (error) {

    }
  }

  async verify() {
    console.log('click');
    try {
      const data = await firstValueFrom(this.authService.verifyEmail(this.code));
      this.userSessionService.refreshSession();
      this.router.navigate(['/']);
      console.log('data', data);
    } catch (error) {
      console.log('errorr', error);

    }
  }

  async resendCode() {
    try {
      const data = await firstValueFrom(this.authService.resendEmailVerificationCode());
      this.messageService.add({ severity: 'success', summary: 'Success', detail: data.msg });
      console.log('data', data);
    } catch (error) {

    }
  }

}
