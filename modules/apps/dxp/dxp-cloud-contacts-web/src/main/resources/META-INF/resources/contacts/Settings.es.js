'use strict';

import core from 'metal';
import templates from './Settings.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';
//import WeDeploy from 'wedeploy';

import './components/AddField.es';
import './components/FieldDisplay.es';
import './components/FieldEditor.es';
import './components/IconButton.es';
import 'metal-modal';

class Settings extends Component {
	created() {
		this.handleDoneEditingField_ = this.handleDoneEditingField_.bind(this);
		this.handleAddModalSave_ = this.handleAddModalSave_.bind(this);
		this.handleAddModalCancel_ = this.handleAddModalCancel_.bind(this);
		this.handleAddClick_ = this.handleAddClick_.bind(this);
		this.handleDoneEditingField_ = this.handleDoneEditingField_.bind(this);

		console.log('Making Request', WeDeploy);
		WeDeploy
			.url('/contacts/proxy')
			.get()
			.then(response => {
				console.log(response.body());
			});
	}

	handleAddClick_() {
		this.showAddModal_ = true;
	}

	handleAddModalSave_(data) {
		this.showAddModal_ = false;
	}

	handleAddModalCancel_() {
		this.showAddModal_ = false;
	}

	handleEdit_(id) {
		this.selectedField_ = this.fields.find(field => field.uuid === id);
	}

	handleDelete_(id) {
		alert(`Delete field: ${id}`);
	}

	handleDoneEditingField_() {
		this.selectedField_ = null;
	}
}

Settings.STATE = {
	fields: {
		validator: core.isArray,
		value: [
			{
				name: 'userName',
				displayName: 'User Name',
				uuid: 'ld0016321',
				sourceCount: 4,
				mappedFields: [
					{
						id: '23',
						name: 'Names_587',
						source: 'Salesforce Nike'
					},
					{
						id: '24',
						name: 'NUsers',
						source: 'Salesforce Adidas'
					},
					{
						id: '25',
						name: 'US_Names_accounts',
						source: 'Hubspot 001'
					},
					{
						id: '26',
						name: 'Profile_name',
						source: 'Liferay DE002'
					}
				]
			},
			{
				name: 'jobTitle',
				displayName: 'Job Title',
				uuid: 'ld0016322',
				sourceCount: 2,
				mappedFields: [
					{
						id: '27',
						name: 'Names_587',
						source: 'Salesforce Nike'
					},
					{
						id: '28',
						name: 'NUsers',
						source: 'Salesforce Adidas'
					}
				]
			},
			{
				name: 'companyName',
				displayName: 'Company Name',
				uuid: 'ld0016323',
				sourceCount: 1,
				mappedFields: [
					{
						id: '29',
						name: 'Names_587',
						source: 'Salesforce Nike'
					}
				]
			},
			{
				name: 'email',
				displayName: 'Email',
				uuid: 'ld0016324',
				sourceCount: 5,
				mappedFields: [
					{
						id: '30',
						name: 'Names_587',
						source: 'Salesforce Nike'
					},
					{
						id: '31',
						name: 'NUsers',
						source: 'Salesforce Adidas'
					},
					{
						id: '32',
						name: 'US_Names_accounts',
						source: 'Hubspot 001'
					},
					{
						id: '33',
						name: 'Profile_name',
						source: 'Liferay DE002'
					},
					{
						id: '34',
						name: 'Nombre_usuario',
						source: 'Liferay DE001'
					}
				]
			},
			{
				name: 'address',
				displayName: 'Address',
				uuid: 'ld0016325',
				sourceCount: 6,
				mappedFields: [
					{
						id: '35',
						name: 'Names_587',
						source: 'Salesforce Nike'
					},
					{
						id: '36',
						name: 'NUsers',
						source: 'Salesforce Adidas'
					},
					{
						id: '37',
						name: 'US_Names_accounts',
						source: 'Hubspot 001'
					},
					{
						id: '38',
						name: 'Profile_name',
						source: 'Liferay DE002'
					},
					{
						id: '39',
						name: 'Nombre_usuario',
						source: 'Liferay DE001'
					},
					{
						id: '40',
						name: 'Users_n',
						source: 'Salesforce Amazon'
					}
				]
			}
		]
	},

	selectedField_: {
		value: null
	},

	showAddModal_: {
		validator: core.isBoolean,
		value: false
	}
};

Soy.register(Settings, templates);

export default Settings;
