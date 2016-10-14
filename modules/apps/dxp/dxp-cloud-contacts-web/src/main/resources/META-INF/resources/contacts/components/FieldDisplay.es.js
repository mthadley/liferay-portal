'use strict';

import core from 'metal';
import templates from './FieldDisplay.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class FieldDisplay extends Component {
	handleEdit_() {
		if (this.fieldId) {
			this.onEdit(this.fieldId);
		}
	}

	handleDelete_() {
		this.onDelete(this.fieldId);
	}

	handleFlag_() {
		this.onFlag(this.fieldId);
	}

	handleMouseEnter_() {
		this.showTools_ = true;
	}

	handleMouseLeave_() {
		this.showTools_ = false;
	}
}

FieldDisplay.STATE = {
	selected: {
		value: false
	},

	editable: {
		validator: core.isBoolean,
		value: false
	},

	fieldId: {
		required: true
	},

	name: {
		required: true,
		validator: core.isString
	},

	onEdit: {
		validator: core.isFunction
	},

	onDelete: {
		validator: core.isFunction
	},

	onFlag: {
		validator: core.isFunction
	},

	required: {
		validator: core.isBoolean,
		value: false
	},

	sourceCount: {
		validator: core.isNumber
	},

	showTools_: {
		validator: core.isBoolean,
		value: false
	}
};

Soy.register(FieldDisplay, templates);

export default FieldDisplay;
