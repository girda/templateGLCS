import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../../../services/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public themeService: ThemeService) { }

  ngOnInit(): void {
  }


}
