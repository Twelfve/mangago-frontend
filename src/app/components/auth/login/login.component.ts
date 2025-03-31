import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';
import { UserSessionService } from '../../../services/userSession/userSession.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ILoginPayload } from '../../../types/payload';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, ToastModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  payload!: ILoginPayload;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userSessionService: UserSessionService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,

  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        rememberMe: [false]
    });


  }

  async login(){
    console.log("clicked");

    if (!this.loginForm.valid) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Favor de llenar todos los campos correctamente.'});
      return;
    }

    this.payload = this.loginForm.value;

    try {
      const res = await firstValueFrom(this.authService.login(this.payload));
      this.userSessionService.loadSession();
      this.router.navigate(['/']);
    } catch (error) {
      this.messageService.add({severity:'error', life:2000, icon:'na', closable:false, detail:'Correo o contraseña incorrectos.'});
    }
  }

  signup(){
    this.router.navigate(['/signup']);
  }

  forgotPassword(){
    this.router.navigate(['/forgot-password']);
  }

}
