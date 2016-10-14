/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from IconButton.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace IconButton.
 * @public
 */

goog.module('IconButton.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('button', null, null,
      'class', 'btn icon-button' + (opt_data.light ? ' light' : '') + (opt_data.borderless ? ' borderless' : ''),
      'onClick', 'onClick');
    ie_void('span', null, null,
        'class', 'icon icon-16-' + opt_data.iconName);
  ie_close('button');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'IconButton.render';
}

exports.render.params = ["iconName","borderless","light"];
exports.render.types = {"iconName":"any","borderless":"any","light":"any"};
templates = exports;
return exports;

});

class IconButton extends Component {}
Soy.register(IconButton, templates);
export { IconButton, templates };
export default templates;
/* jshint ignore:end */
