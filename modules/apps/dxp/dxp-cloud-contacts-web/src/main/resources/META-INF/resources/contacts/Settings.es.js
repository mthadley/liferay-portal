'use strict';

import core from 'metal';
import templates from './Settings.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

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

		this.getFields_();
	}

	getFields_() {
		this.loading_ = true;

		Liferay.Service(
			'/osb_scv.usermappingrule/get-user-mapping-rule-destination-fields',
			{
				end: -1,
				start: -1
			},
			fields => this.setState({
				fields,
				loading_: false
			})
		);
	}

	handleAddClick_() {
		this.showAddModal_ = true;
	}

	handleAddModalSave_(data) {
		this.showAddModal_ = false;

		Liferay.Service(
			'/osb_scv.usermappingrule/add-user-mapping-rule',
			{
				destinationField: data.destinationField,
				fieldSetId: 0,
				frequency: 0,
				mappingDataSourceId: data.mappingDataSourceId,
				modelName: data.modelName,
				required: false,
				sourceField: data.sourceField
			},
			() => this.getFields_()
		);
	}

	handleAddModalCancel_() {
		this.showAddModal_ = false;
	}

	handleEdit_(name) {
		this.selectedFieldName_ = name;
	}

	handleDelete_(id) {
		alert(`Delete field: ${id}`);
	}

	handleDoneEditingField_(reload) {
		this.selectedFieldName_ = null;

		if (reload) {
			this.getFields_();
		}
	}

	syncFieldName() {
		this.getFields_();
	}
}

Settings.STATE = {
	fields: {
		validator: core.isArray,
		value: []
	},

	loading_: {
		validator: core.isBoolean,
		value: true
	},

	selectedFieldName_: {
		value: null
	},

	showAddModal_: {
		validator: core.isBoolean,
		value: false
	}
};

Soy.register(Settings, templates);

export default Settings;
