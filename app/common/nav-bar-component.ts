import {Component} from 'angular2/core';

@Component({
  selector: 'nav-bar',
  template: `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo center">Contacts</a>
        </div>
      </nav>
    </div>`
})
export class NavBarComponent {}
