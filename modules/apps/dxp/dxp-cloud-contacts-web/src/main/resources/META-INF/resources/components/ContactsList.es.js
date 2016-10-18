'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './ContactsList.soy';

import 'dxp-cloud-shared/Spinner.es';

import './ContactListItem.es';

import InfiniteScroll from './InfiniteScroll.es';

class ContactsList extends Component {
	created() {
		this.InfiniteScroll_ = new InfiniteScroll(
			{
				hasMoreResults: true,
				onScrollEnd: this.loadMore_.bind(this),
				scrollOffset: 2000
			}
		);

		this.InfiniteScroll_.created();
	}

	rendered() {
		this.InfiniteScroll_.rendered();
	}

	attached() {
		this.InfiniteScroll_.scrollContainer = this.element;

		this.InfiniteScroll_.attached();
	}

	detached() {
		this.InfiniteScroll_.detached();
	}

	loadMore_() {
		const instance = this;

		const {delta} = instance;

		instance.loading_ = true;

		return instance.loadMore(delta).then(
			contacts => {
				if (contacts.length < delta) {
					instance.InfiniteScroll_.hasMoreResults = false;
				}

				instance.loading_ = false;
			}
		);
	}
}

ContactsList.STATE = {
	contacts: {
		validator: core.isArray,
		value: []
	},

	delta: {
		validator: core.isNumber,
		value: 40
	},

	loadMore: {
		validator: core.isFunc
	},

	loading_: {
		validator: core.isBool,
		value: true
	},

	onContactClick: {
		validator: core.isFunc
	}
}

Soy.register(ContactsList, templates);

export default ContactsList;
