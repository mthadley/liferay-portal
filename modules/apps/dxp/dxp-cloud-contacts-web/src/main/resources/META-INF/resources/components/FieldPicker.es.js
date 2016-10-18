'use strict';

import core from 'metal';
import templates from './FieldPicker.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './FieldPickerItem.es';

class FieldPicker extends Component {
	created() {
		this.filteredItems_ = this.getFilteredItems_();
	}

	getFilteredItems_(inputValue = this.inputValue_) {
		const filteredItems = this.items.slice(0, 9);

		if (!inputValue) {
			return filteredItems;
		}

		return filteredItems.filter(
			item => item.name.toLowerCase().includes(inputValue.toLowerCase())
		);
	}

	handleInputChange_(event) {
		const {value} = event.target;

		this.setState({
			filteredItems_: this.getFilteredItems_(value),
			inputValue_: value
		});
	}

	handleFieldSelect_(fieldId) {
		this.onSelect(fieldId);
	}

	syncItems() {
		this.filteredItems_ = this.getFilteredItems_();
	}
}

FieldPicker.STATE = {
	filteredItems_: {
		validator: core.isArray,
		value: []
	},

	items: {
		validator: core.isArray,
		value: []
	},

	selectedItemId: {
		value: null
	},

	onSelect: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	label: {
		validator: core.isString,
		value: ''
	},

	disabled: {
		validator: core.isBoolean,
		value: false
	},

	inputValue_: {
		validator: core.isString,
		value: ''
	},

	selectedItemName: {
		value: null
	}
};

Soy.register(FieldPicker, templates);

export default FieldPicker;
