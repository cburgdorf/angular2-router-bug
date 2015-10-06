import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {NavBarComponent} from './common/nav-bar-component';
import {Contact} from './models/contact';
import {ContactsService} from './common/contacts-service';
import {ContactsListComponent} from './components/contacts-list/contacts-list-component';
import {ContactDetailComponent} from './components/contact-detail/contact-detail-component';
import {ContactEditorComponent} from './components/contact-editor/contact-editor-component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
  selector: 'contacts-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
    `,
  directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: ContactsListComponent, as: 'ContactsList' },
  { path: '/contact/:id', component: ContactDetailComponent, as: 'ContactDetail' },
  { path: '/contact/:id/edit', component: ContactEditorComponent, as: 'ContactEditor' }
])
class ContactsApp {
}

bootstrap(ContactsApp, [ContactsService, ROUTER_PROVIDERS]);
