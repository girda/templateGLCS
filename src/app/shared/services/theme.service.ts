import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {

  changeTheme(e, name): void {
    if (document.body.classList.value.indexOf(name) !== -1) {
      return;
    } else {
      document.body.classList.forEach(className => {
        if (className.indexOf('theme') !== -1) {
          document.body.classList.remove(className);
        }

      });
      document.body.classList.add(`theme-${name}`);
    }
  }
}
