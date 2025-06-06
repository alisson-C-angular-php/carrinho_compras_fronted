import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent {
  loggedUser: any;

  constructor(private router: Router) { }
  ngOnInit() {
    this.getLoggedUser()
  }
  logout() {
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }
  getLoggedUser() {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      this.loggedUser = userData.user.email;
      console.log("USUARIO LOGADO: ",this.loggedUser)
    }
  }
}
