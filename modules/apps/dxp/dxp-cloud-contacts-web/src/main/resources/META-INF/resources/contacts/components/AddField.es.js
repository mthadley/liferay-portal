'use strict';

import core from 'metal';
import templates from './AddField.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class AddField extends Component {
	handleSave_() {
		this.onSave({});
	}
}

AddField.STATE = {
	onSave: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	onCancel: {
		validator: core.isFunction,
		value: core.nullFunction
	}
};

Soy.register(AddField, templates);

export default AddField;