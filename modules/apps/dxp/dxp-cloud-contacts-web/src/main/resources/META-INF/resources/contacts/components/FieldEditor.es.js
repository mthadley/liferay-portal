'use strict';

import core from 'metal';
import templates from './FieldEditor.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './IconButton.es';
import './FieldDisplay.es';

class FieldEditor extends Component {
	handleDeleteField_(id) {
		alert(`Delete field: ${id}`);
	}

	handleDeleteMappedField_(id) {
		alert(`Delete mapped field: ${id}`);
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
}

FieldEditor.STATE = {
	field: {
		validator: core.isArray,
		value: []
	},

	onDone: {
		validator: core.isFunction
	}
};

Soy.register(FieldEditor, templates);

export default FieldEditor;
