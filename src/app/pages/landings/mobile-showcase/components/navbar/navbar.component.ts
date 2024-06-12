import { Component } from '@angular/core';

@Component({
  selector: 'mobile-showcase-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isOpen: boolean = false;

  toggleCollapse() {
    this.isOpen = !this.isOpen;
  }

}
