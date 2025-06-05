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

  constructor() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const user = JSON.parse(userData);
      this.isAdmin = user.role === 'administrador'; // ou 'admin'
    }
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
}
