import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {AuthService} from '../../shared/services/auth.service';
import {UserService} from '../../shared/services/user.service';
import {KeysService} from '../../shared/services/keys.service';
import {sha256} from 'js-sha256';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  aSub: Subscription;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private router: Router,
              private userService: UserService,
              private keys: KeysService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params.accessDenied) {
        alert('Для початку потрібно зареєструватися в системі');
      }
    });
  }

  onSubmit(): void {
    this.form.disable();
    const formData = this.form.value;
    formData.password = sha256(formData.password);

    this.aSub = this.auth.login(formData).subscribe(
      () => {
        this.router.navigate(['/main']);
        this.form.enable();
      },
      error => {
        alert(error.error.message);
        this.form.enable();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

}
