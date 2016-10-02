import { Component } from '@angular/core';
@Component({
  selector: 'nav-bar',
  template: `
  <nav>
    <div class="nav-wrapper blue">
      <div class="container">
        <a routerLink="/home" class="brand-logo">{{logo}}</a>
        <ul class="right hide-on-med-and-down">
          <li [routerLinkActive]="['active']"><a routerLink="/home">Home</a></li>
          <li [routerLinkActive]="['active']"><a routerLink="/exemplo">Exemplo</a></li>


        </ul>
      </div>
    </div>
  </nav>

  `
})
export class NavBarComponent {
 logo = "Modelo";
}
