import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {UserService} from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tempalteGLCS';

  constructor(private auth: AuthService,
              private userService: UserService) {}

  ngOnInit(): void {
    const protectionToken = localStorage.getItem('auth-token');
    const protectionRole = localStorage.getItem('role');
    const protectionUserId = localStorage.getItem('user-id');
    const protectionClientId = localStorage.getItem('client-id');

    if (protectionToken !== null) {
      this.auth.setToken(protectionToken);
    }

    if (protectionRole !== null ) {
      this.userService.setRole(JSON.parse(protectionRole));
      console.log(this.userService.getRole());
    }

    if (protectionUserId !== null) {
      this.userService.setUserId(JSON.parse(protectionUserId));
    }

    if (protectionClientId !== null) {
      this.userService.setClient(JSON.parse(protectionClientId));
    }
  }
}
