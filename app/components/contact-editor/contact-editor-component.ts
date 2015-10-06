import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {CloneService} from '../../common/clone-service';
import {ContactsService} from '../../common/contacts-service';
import {Contact} from '../../models/contact';
import {Router, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'contact-editor-component',
  providers: [CloneService],
  directives: [ROUTER_DIRECTIVES],
  templateUrl: './app/components/contact-editor/contact-editor-component.html'
})
export class ContactEditorComponent {
  constructor (private cloneService: CloneService<Contact>,
               private router:Router,
               contactsService: ContactsService,
               routeParams: RouteParams) {
    this.contact = contactsService.getContact(routeParams.get('id'));
  }

  @Input() set contact (value: Contact) {
    this.cloneService.setItem(value);
  }

  get contact () {
    return this.cloneService.getItem();
  }

  cancel (contact: Contact) {
    this.cloneService.restoreItem();
    this.goToDetails(contact);
  }

  save (contact: Contact) {
    this.cloneService.commitChanges();
    this.goToDetails(contact);
  }

  private goToDetails (contact: Contact) {
    //this causes a browser reload for no obvious reason
    this.router.navigate(['ContactDetail', {id: contact.id}]);

    //this doesn't cause a browser reload
    //setTimeout(() => this.router.navigate(['ContactDetail', {id: contact.id}]));
  }

}
