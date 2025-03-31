import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { SharedModule } from '../../../shared/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { UserSessionService } from '../../../services/userSession/userSession.service';
import { IUser } from '../../../models/User.model';
import { UserService } from '../../../services/user/user.service';
import { IUpdateUserPayload } from '../../../types/payload';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [SharedModule, HeaderComponent, Toast],
  providers: [MessageService],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent {

  isEmailVerified$ = this.userSessionService.isEmailVerified$;
  userData$ = this.userSessionService.userData$;
  userData!: IUser;

  payload!: IUpdateUserPayload;
  userDataUnmodified!: IUpdateUserPayload;

  isEditing: boolean = false;

  constructor(
    private userSessionService: UserSessionService,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  async ngOnInit() {
    this.userData = await firstValueFrom(this.userData$);
    this.payload = {
      username: this.userData.username,
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      email: this.userData.email,
      phoneNumber: this.userData.phoneNumber
    }
    this.userDataUnmodified = {...this.payload};
  }

  saveChanges(){
    this.isEditing = false;

    if (JSON.stringify(this.payload) !== JSON.stringify(this.userDataUnmodified)) {
      try {
        const res = firstValueFrom(this.userService.updateUserPersonalData(this.payload));
        this.messageService.add({severity: 'success', summary: 'Cambios guardados', detail: 'Los cambios se han guardado correctamente'});
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        this.messageService.add({severity: 'danger', summary: 'Error', detail: 'Ha ocurrido un error al guardar los cambios'});
      }
    } else{
      this.messageService.add({severity: 'info', summary: 'Sin cambios', detail: 'No se han realizado cambios'});
    }


    // Call the service to update the user data

  }

}
