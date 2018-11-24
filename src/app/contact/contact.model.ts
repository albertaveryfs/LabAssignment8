
interface IContact {

    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    editing?: boolean;
}
export class Contact {


    constructor(contact: IContact) {
        contact.editing = this.setState(contact);
        Object.assign(this, contact);
    }

    setState(contact: IContact) {

        if (contact == null || Object.keys(contact).length == 0) {
            return true;
        }

        let editing = false;
        Object.keys(contact).forEach((key) => {
            if (contact[key] == null) {
                editing = true;
            }
        });

        return editing;
    }
}