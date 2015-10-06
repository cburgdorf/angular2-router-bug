import {Component} from 'angular2/core';
import {Contact} from '../../models/contact';
import {ContactsService} from '../../common/contacts-service';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'contacts-list-component',
  templateUrl: './app/components/contacts-list/contacts-list-component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class ContactsListComponent {
  contacts: Array<Contact>;
  constructor (contactsService: ContactsService) {
    this.contacts = contactsService.getContacts();
  }
}
