import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent implements OnInit {

  isShowSidebar = true;
  menu = [
    {
      title: 'item 1', children: [
        {title: 'child-1 item 1', children: null, icon: 'menu'},
        {title: 'child-1 item 2', children: null, icon: 'menu'},
        {
          title: 'child-1 item 3', children: [
            {title: 'child-2 item 1', children: null, icon: 'menu'},
            {title: 'child-2 item 2', children: null, icon: 'menu'},
            {
              title: 'child-2 item 3', children: [
                {title: 'child-3 item 1', children: null, icon: 'menu'},
                {title: 'child-3 item 2', children: null, icon: 'menu'},
                {title: 'child-3 item 3', children: null, icon: 'menu'},
              ], icon: 'menu'
            },
          ], icon: 'menu'
        },
      ], icon: 'menu'
    },
    {title: 'item 2', children: null, icon: 'menu'},
    {title: 'item 3', children: null, icon: 'menu'},
    {title: 'item 4', children: null, icon: 'menu'},
    {title: 'item 5', children: null, icon: 'menu'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSidebar(e): void {
    this.isShowSidebar = !this.isShowSidebar;
  }

}
