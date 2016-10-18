'use strict';

import core from 'metal';
import templates from './FieldPickerItem.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class FieldPickerItem extends Component {
	handleClick_() {
		this.onClick(this.fieldId);
	}

	handleMouseEnter_() {
		this.hover_ = true;
	}

	handleMouseLeave_() {
		this.hover_ = false;
	}
}

FieldPickerItem.STATE = {
	hover_: {
		validator: core.isBoolean,
		value: false
	},

	onClick: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	fieldId: {
		required: true
	},

	name: {
		validator: core.isString,
		value: ''
	}
};

Soy.register(FieldPickerItem, templates);

export default FieldPickerItem;
