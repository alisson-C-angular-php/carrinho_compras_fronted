import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/side-bar-component/side-bar-component';
import { HeaderComponent } from './components/header-component/header-component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent,HeaderComponent,  CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'produtos';
  showSidebar = true;
  showHeader = true;
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = event.urlAfterRedirects !== '/';

        this.showSidebar = event.urlAfterRedirects !== '/';
      }
    });
  }
}