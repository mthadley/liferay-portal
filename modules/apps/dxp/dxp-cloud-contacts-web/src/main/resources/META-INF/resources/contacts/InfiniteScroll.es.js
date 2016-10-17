import State from 'metal-state';
import core from 'metal';

import './ContactListItem.es';

class InfiniteScroll extends State {
	created() {
		_.bindAll(
			this,
			'handleScroll_',
			'shouldScroll_'
		);

		const {leading, maxWait, wait} = this;

		this.debouncedScrollHandler_ = _.debounce(this.handleScroll_, wait, {leading, maxWait});
	}

	rendered() {
		if (this.hasMoreResults) {
			this.debouncedScrollHandler_();
		}
	}

	attached() {
		window.addEventListener('scroll', this.debouncedScrollHandler_);
	}

	detached() {
		this.debouncedScrollHandler_.cancel();

		window.removeEventListener('scroll', this.debouncedScrollHandler_);

		if (this._request) {
			this._request.cancel();
		}
	}

	handleScroll_() {
		const {onScrollEnd} = this;

		if (!this.loading_ && onScrollEnd && this.shouldScroll_()) {
			this.loading_ = true;

			this._request = onScrollEnd().then(
				() => {
					this.loading_ = false;
				}
			);
		}
	}

	shouldScroll_() {
		let shouldScroll = true;

		const scrollContainer = this.scrollContainer;

		if (scrollContainer && scrollContainer.offsetParent) {
			shouldScroll = (scrollContainer.getBoundingClientRect().bottom - window.innerHeight - this.scrollOffset) < 0;
		}

		return shouldScroll;
	}

	syncHasMoreResults(newVal) {
		if (!newVal) {
			this.debouncedScrollHandler_.cancel();
		}
	}
}

InfiniteScroll.STATE = {
	hasMoreResults: {
		validator: core.isBool,
		value: true
	},

	leading: {
		validator: core.isBool,
		value: false
	},

	loading_: {
		validator: core.isBool,
		value: false
	},

	maxWait: {
		validator: core.isNumber,
		value: 200
	},

	onScrollEnd: {
		validator: core.isFunc
	},

	scrollContainer: {
		validator: core.isObject
	},

	scrollOffset: {
		validator: core.isNumber,
		value: 200
	},

	wait: {
		validator: core.isNumber,
		value: 100,
	}
};

export default InfiniteScroll;