import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public rectiveMenu: MenuItem[] = [
    { title: 'Básicos', route: './reactive/basic' },
    { title: 'Dinámicos', route: './reactive/dynamic' },
    { title: 'Switches', route: './reactive/swicthes' }
  ];

  public authMenu: MenuItem[] = [
    { title: 'Reguistro', route: './auth' },
  ];
  
}
