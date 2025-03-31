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

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule, PasswordModule, InputMaskModule, ToastModule],
  providers: [MessageService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm!: FormGroup;

  payload!: ISignupPayload;

  upperCase!: boolean;
  lowerCase!: boolean;
  specialChar!: boolean;
  length!: boolean;
  number!: boolean;
  usernameAvailable!: boolean;

  loading: boolean = false;
  severity: 'success' | 'info' | 'warn' | 'danger' | 'help' | 'primary' | 'secondary' | 'contrast' | null | undefined = 'contrast';
  icon: string = 'na';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmedPassword: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Apply custom validators to the form group
    this.signUpForm.setValidators([
      this.securePassword('password'),
      this.matchPasswords('password', 'confirmedPassword')
    ]);

    this.signUpForm.get('password')?.valueChanges.subscribe((value) => {
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


  async signUp(){
    console.log('signUpForm', this.signUpForm.valid);
    await this.verifyUsername();
    console.log('usernameAvailable', this.usernameAvailable);

    if (!this.signUpForm.valid) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Favor de llenar todos los campos correctamente.'});
      return;
    }
    if (this.usernameAvailable == false) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'El nombre de usuario ya está en uso.'});
      return;
    }

    this.payload = this.signUpForm.value;
    this.payload.phoneNumber = this.payload.phoneNumber.replace(/\D/g, '');

    try {
      const res = await firstValueFrom(this.authService.signup(this.payload));
      this.router.navigate(['/verify-email']);
      console.log('res', res);
    } catch (res:any) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Error: ' + res.error.msg});
      console.error('Error signing up:', res);
    }
  }

  async verifyUsername() {
    const isValidUsername = /^[a-zA-Z0-9_\-\.]+$/.test(this.signUpForm.get('username')?.value);

    if (this.signUpForm.get('username')?.value == '') {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Usuario no valido: Debe tener al menos 4 caracteres.'});
      this.severity = 'danger';
      this.icon = 'pi pi-times';
      return;

    }

    if (!isValidUsername) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Usuario no valido: Solo letras, numeros, _, -, y . son permitidos.'});
      this.severity = 'danger';
      this.icon = 'pi pi-times';
      return;
    }

    if (this.signUpForm.get('username')?.invalid || !this.signUpForm.get('username')) {
      this.severity = 'danger';
      this.icon = 'pi pi-times';
      this.usernameAvailable = false;
      return;
    }

    this.loading = true;

    try {
      const res = await firstValueFrom(this.authService.verifyUsername(this.signUpForm.get('username')?.value));
      console.log('res', res);
      this.usernameAvailable = res.data?.available;

      if (res.data?.available) {
        this.severity = 'success';
        this.icon = 'pi pi-check';
      } else {
        this.severity = 'danger';
        this.icon = 'pi pi-times';
      }
    } catch (error) {
      this.severity = 'danger';
      this.icon = 'pi pi-times';
      console.error('Error verifying username:', error);
    } finally {
      this.loading = false;
    }
  }

}
