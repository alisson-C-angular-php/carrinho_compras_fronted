import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar-component',

  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './side-bar-component.html',
  styleUrl: './side-bar-component.scss'
})
export class SidebarComponent {
  isExpanded = false;
  isAdmin = false;
  loggedUser: any;

  constructor() {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.isAdmin = user.user.funcao === 'Administrador'; 
    }
  }

  ngOnInit(){
    this.getLoggedUser()
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.sidebar')) {
      this.isExpanded = false;
    }
  }

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  onMouseEnter() {
    this.isExpanded = true;
  }

  onMouseLeave() {
    this.isExpanded = false;
  }

    getLoggedUser() {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.loggedUser = userData.user.email;
    }
  }
}
