'use strict';

import core from 'metal';
import templates from './IconButton.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class IconButton extends Component {
}

IconButton.STATE = {
	borderless: {
		validator: core.isBoolean,
		value: false
	},

	light: {
		validator: core.isBoolean,
		value: false
	},

	onClick: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	iconName: {
		required: true,
		validator: core.isString
	}
};

Soy.register(IconButton, templates);

export default IconButton;