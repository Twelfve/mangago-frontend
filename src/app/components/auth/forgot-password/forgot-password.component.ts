import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';
import { ISignupPayload } from '../../../types/payload';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { MessageService } from 'primeng/api';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { InputOtpModule } from 'primeng/inputotp';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [SharedModule, PasswordModule, InputMaskModule, ToastModule, InputOtpModule],
  providers: [MessageService],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  changePasswordForm!: FormGroup;

  userIdentifier!: string;

  confirmedPassword!: string;

  upperCase!: boolean;
  lowerCase!: boolean;
  specialChar!: boolean;
  length!: boolean;
  number!: boolean;

  loading: boolean = false;
  severity: 'success' | 'info' | 'warning' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'secondary';
  icon: string = 'na';

  codeRequested: boolean = false;
  codeSent: boolean = false;
  codeSuccess: boolean = false;
  code: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', [Validators.required]],
    });

    // Apply custom validators to the form group
    this.changePasswordForm.setValidators([
      this.securePassword('password'),
      this.matchPasswords('password', 'confirmedPassword')
    ]);

    this.changePasswordForm.get('password')?.valueChanges.subscribe((value) => {
      this.checkPasswordStrength(value);
    });

  }

  matchPasswords(password: string, confirmedPassword: string): ValidatorFn {
    return (control: AbstractControl) => {
      const formGroup = control as FormGroup;
      const passwordControl = formGroup.controls[password];
      const confirmedPasswordControl = formGroup.controls[confirmedPassword];

      if (confirmedPasswordControl.errors && !confirmedPasswordControl.errors['passwordMismatch']) {
        return null;
      }

      if (passwordControl.value !== confirmedPasswordControl.value) {
        confirmedPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmedPasswordControl.setErrors(null);
      }

      return null; // Always return null to indicate no group-level error
    };
  }

  securePassword(password: string): ValidatorFn {
    return (control: AbstractControl) => {
      const formGroup = control as FormGroup;
      const passwordControl = formGroup.controls[password];

      if (passwordControl.errors && !passwordControl.errors['passwordSecure']) {
        return null;
      }

      const value = passwordControl.value;

      // Validate password strength
      if (
        value.length < 8 ||
        !/[A-Z]/.test(value) ||
        !/[a-z]/.test(value) ||
        !/[0-9]/.test(value) ||
        !/[!@#$%^&*]/.test(value)
      ) {
        passwordControl.setErrors({ passwordSecure: true });
      } else {
        passwordControl.setErrors(null);
      }

      return null; // Always return null to indicate no group-level error
    };
  }

  checkPasswordStrength(value: string) {
    this.upperCase = /[A-Z]/.test(value);
    this.lowerCase = /[a-z]/.test(value);
    this.specialChar = /[!@#$%^&*]/.test(value);
    this.length = value.length >= 8;
    this.number = /[0-9]/.test(value);
  }

  async requestCode(){
    console.log('email', this.userIdentifier);
    if (this.userIdentifier === '') {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Favor de llenar todos los campos correctamente.'});
      return;

    }

    try {
      const res = await firstValueFrom(this.authService.forgotPasswordRequest(this.userIdentifier));
      this.codeRequested = true;
      this.messageService.add({severity:'success', life:2000, icon:'na', closable:false, detail: res.msg});
      console.log('res', res);
    } catch (res:any) {
      console.log('res', res);

      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Error: ' + res.error.msg});
      console.error('Error sending code:', res);
    }
  }

  async sendCode(){
    console.log('code', this.code);
    if (this.code === '') {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Favor de llenar todos los campos correctamente.'});
      return;

    }

    try {
      const res = await firstValueFrom(this.authService.forgotPasswordSendCode(this.userIdentifier, this.code));
      this.codeSent = true;
      this.codeSuccess = true;
      console.log('res', res);
    } catch (res:any) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Error: ' + res.error.msg});
      console.error('Error sending code:', res);
    }
  }

  async changePassword(){

    if (!this.changePasswordForm.valid) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Favor de llenar todos los campos correctamente.'});
      return;
    }

    try {
      const res = await firstValueFrom(this.authService.forgotPasswordReset(this.userIdentifier, this.changePasswordForm.get('password')?.value, this.code));
      this.router.navigate(['/login']);
    } catch (res:any) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Error: ' + res.error.msg});
      console.error('Error signing up:', res);
    }
  }
}
