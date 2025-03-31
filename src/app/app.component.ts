import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserSessionService } from './services/userSession/userSession.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-personal-FMYCB-frontend';

  constructor(private userSessionService: UserSessionService) { }

  ngOnInit() {
    this.userSessionService.loadSession();

  }

}
