/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AddField.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AddField.
 * @public
 */

goog.module('AddField.incrementaldom');

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
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'add-field');
    ie_open('p');
      itext('Dolor eligendi earum magni dolores eum Non nemo iure maiores iure molestias! Accusamus nam eos earum sunt tempore Dolorum suscipit adipisci consectetur natus soluta dolores, laboriosam. Odit quae velit atque!');
    ie_close('p');
    ie_open('div', null, null,
        'class', 'btn-group');
      ie_open('button', null, null,
          'class', 'btn btn-primary',
          'onClick', 'handleSave_');
        itext('Done');
      ie_close('button');
      ie_open('button', null, null,
          'class', 'btn btn-default',
          'onClick', opt_data.onCancel);
        itext('Cancel');
      ie_close('button');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AddField.render';
}

exports.render.params = ["onCancel"];
exports.render.types = {"onCancel":"any"};
templates = exports;
return exports;

});

class AddField extends Component {}
Soy.register(AddField, templates);
export { AddField, templates };
export default templates;
/* jshint ignore:end */
