'use strict';

import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './ContactsList.soy';

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
		this.loading_ = true;

		return this.loadMore().then(
			() => {
				this.loading_ = false;
			}
		);
	}
}

ContactsList.STATE = {
	contacts: {
		validator: core.isArray,
		value: []
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
