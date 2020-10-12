import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';
import Birthdate from '@salesforce/schema/Contact.Birthdate';
import Phone from '@salesforce/schema/Contact.Phone';

export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FirstName, LastName, Email, Birthdate, Phone];

    connectedCallback() {
        var hallo = "hello";
    }

    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            message: "Record ID: " + event.detail.id,
        });
        this.dispatchEvent(toastEvent);
    }
}