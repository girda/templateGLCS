import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu;

  constructor() { }

  ngOnInit(): void {
    this.menu.forEach(item => item.active = false);
  }

  showChildren(event, item): void {
    event.stopPropagation();
    this.menu.forEach(el => {
      if (el !== item) {
        el.active = false;
      }
    });
    item.active = !item.active;
  }

}
