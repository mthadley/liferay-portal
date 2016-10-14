'use strict';

import core from 'metal';
import templates from './FieldPickerItem.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class FieldPickerItem extends Component {
	handleClick_() {
		this.onClick(this.fieldId);
	}
}

FieldPickerItem.STATE = {
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
