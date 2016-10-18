import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './ContactsHome.soy';
import {CancellablePromise as Promise} from 'metal-promise';

import 'dxp-cloud-sidebar/DXPSidebar.es';
import 'dxp-cloud-topbar/DXPTopbar.es';

import '../components/ContactsList.es';
import '../components/Profile.es';

const REGEX_ASSOC = /\$ASSOCIATED\$/;

const CONTACT_INDEX_KEYS = [
	'Email Address',
	'First Name',
	'Last Name',
	'scvUserProfileId'
];

class ContactsHome extends Component {
	getContacts_() {
		const instance = this;

		const start = instance.contacts_.length;

		return new Promise(
			(resolve, reject) => {
				Liferay.Service(
					'/SCVUserProfileUtil.userprofileutil/get-scv-user-profiles',
					{
						from: start,
						size: 40
					},
					contacts => {
						const normalizedContacts = instance.normalizeContacts_(contacts);

						instance.contacts_ = instance.contacts_.concat(normalizedContacts);

						resolve(normalizedContacts);
					}
				);
			}
		);
	}

	normalizeContacts_(contacts) {
		let newContacts = [];

		contacts.forEach(
			(contact, i) => {
				let contactArr = [];

				CONTACT_INDEX_KEYS.forEach(
					key => {
						const value = contact[key] || '';

						contactArr.push(
							{
								class: _.kebabCase(key),
								label:  _.startCase(key),
								value
							}
						);
					}
				);

				// temp until data is normalized.

				if (i !== 0) {
					newContacts.push(
						{
							data: contactArr,
							id: contact.scvUserProfileId
						}
					);
				}
			}
		);

		return newContacts;
	}

	onBackClick_() {
		this.contactId_ = -1;
	}

	onContactClick_(id) {
		this.contactId_ = id;
	}
}

ContactsHome.STATE = {
	contactId_: {
		validator: core.isNumber,
		value: -1
	},

	_contacts: {
		validator: core.isArray,
		value: []
	},

	contacts_: {
		validator: core.isArray,
		value: []
	}
}

Soy.register(ContactsHome, templates);

export default ContactsHome;
