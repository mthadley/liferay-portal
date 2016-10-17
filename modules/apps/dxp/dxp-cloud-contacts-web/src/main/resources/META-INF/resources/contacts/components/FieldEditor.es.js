'use strict';

import core from 'metal';
import templates from './FieldEditor.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './IconButton.es';
import './FieldDisplay.es';

class FieldEditor extends Component {
	created() {
		this._requestId = 0;

		this.getMappedFields_();
	}

	getRequestId() {
		this._requestId++;

		return this._requestId;
	}

	getMappedFields_() {
		this.loading_ = true;

		const id = this.getRequestId();

		Liferay.Service(
			'/osb_scv.usermappingrule/get-user-mapping-rules',
			{
				destinationField: this.fieldName
			},
			mappedFields_ => {
				// Only respond to most recent request
				if (id !== this._requestId) {
					return;
				}

				this.setState({
					mappedFields_,
					loading_: false
				});
			}
		);
	}

	handleAddMappedField_() {
		this.onAdd(this.fieldName);
	}

	handleDeleteField_(id) {
		this.onDelete(id, true);
	}

	handleDeleteMappedField_(userMappingRuleId) {
		if (confirm('Are you sure you want to delete this mapping rule?')) {
			Liferay.Service(
				'/osb_scv.usermappingrule/delete-user-mapping-rule',
				{
					userMappingRuleId
				},
				response => {
					if (this.mappedFields_.length === 1) {
						this.onDone(true);
					}
					else {
						this.getMappedFields_();
					}
				}
			);
		}
	}

	handleDone_() {
		this.onDone();
	}

	handleEditMappedField_(id) {
		alert(`Edit mapped field: ${id}`);
	}

	handleFlagMappedField_(id) {
		alert(`Flag mapped field: ${id}`);
	}

	syncFieldName() {
		this.getMappedFields_();
	}
}

FieldEditor.STATE = {
	loading_: {
		validator: core.isBoolean,
		value: true
	},

	fieldName: {
		required: true,
		validator: core.isString
	},

	mappedFields_: {
		validator: core.isArray,
		value: []
	},

	onAdd: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	onDelete: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	onDone: {
		validator: core.isFunction
	}
};

Soy.register(FieldEditor, templates);

export default FieldEditor;
