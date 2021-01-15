import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../interfaces/user.interface';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = null;

  constructor(private http: HttpClient,
              private userService: UserService) {

  }

  register(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(`${environment.apiUrl}/api/auth/register`, user);
  }

  login(user: IUser): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/auth/login`, user)
      .pipe(
        tap(
          userData => {
            localStorage.setItem('auth-token', userData.token);
            localStorage.setItem('role', userData.role);
            this.setToken(userData.token);
            this.userService.role = userData.role;
          }
        )
      );
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.setToken(null);
    localStorage.clear();
  }
}
