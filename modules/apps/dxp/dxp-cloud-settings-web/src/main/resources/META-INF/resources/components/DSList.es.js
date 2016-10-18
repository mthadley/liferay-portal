'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './DSList.soy';

import 'dxp-cloud-shared/Spinner.es';

import './DSItem.es';

class DSList extends Component {
}

DSList.STATE = {
	loading: {
		validator: core.isBool,
		value: true
	},

	items: {
		validator: core.isArray,
		value: []
	},

	onItemDelete: {
		validator: core.isFunc
	},

	typesMap: {
		validator: core.isObj
	}
};

Soy.register(DSList, templates);

export default DSList;
