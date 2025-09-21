import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login/inbox', icon: 'Log-in' },
    { title: 'Registro', url: '/home', icon: 'person-add' }


    ]
  constructor() {}
}
