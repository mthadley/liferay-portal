/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from FieldEditor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FieldEditor.
 * @public
 */

goog.module('FieldEditor.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('FieldDisplay.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('IconButton.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'field-editor');
    ie_open('div', null, null,
        'class', 'field-editor-header');
      $templateAlias1({editable: true, extra: opt_data.field.uuid, id: opt_data.field.uuid, name: opt_data.field.displayName, onDelete: opt_data.handleDeleteField_}, null, opt_ijData);
      ie_open('div', null, null,
          'class', 'field-count');
        ie_void('span', null, null,
            'class', 'count-icon icon-12-link');
        var dyn2 = opt_data.field.mappedFields.length;
        if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
        itext(' field(s) mapped');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'toolbar');
        ie_open('div', null, null,
            'class', 'priority');
          ie_open('span');
            itext('Priority');
          ie_close('span');
          $templateAlias2({borderless: true, iconName: 'clock'}, null, opt_ijData);
          $templateAlias2({borderless: true, iconName: 'arrow-up-rod'}, null, opt_ijData);
        ie_close('div');
        ie_open('div', null, null,
            'class', 'controls');
          $templateAlias2({iconName: 'magnifier'}, null, opt_ijData);
          $templateAlias2({iconName: 'plus', light: true}, null, opt_ijData);
        ie_close('div');
      ie_close('div');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'field-editor-body');
      var mappedFieldList104 = opt_data.field.mappedFields;
      var mappedFieldListLen104 = mappedFieldList104.length;
      if (mappedFieldListLen104 > 0) {
        for (var mappedFieldIndex104 = 0; mappedFieldIndex104 < mappedFieldListLen104; mappedFieldIndex104++) {
          var mappedFieldData104 = mappedFieldList104[mappedFieldIndex104];
          $templateAlias1({extra: mappedFieldData104.source, id: mappedFieldData104.id, name: mappedFieldData104.name, onDelete: opt_data.handleDeleteMappedField_, onEdit: opt_data.handleEditMappedField_, onFlag: opt_data.handleFlagMappedField_}, null, opt_ijData);
        }
      } else {
        ie_open('span', null, null,
            'class', 'empty-message');
          itext('No fields currently being mapped');
        ie_close('span');
      }
    ie_close('div');
    ie_open('div', null, null,
        'class', 'field-editor-footer');
      ie_open('button', null, null,
          'class', 'btn btn-accent',
          'onClick', 'handleDone_');
        itext('Done');
      ie_close('button');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FieldEditor.render';
}

exports.render.params = ["field","handleDeleteField_","handleDeleteMappedField_","handleEditMappedField_","handleFlagMappedField_"];
exports.render.types = {"field":"any","handleDeleteField_":"any","handleDeleteMappedField_":"any","handleEditMappedField_":"any","handleFlagMappedField_":"any"};
templates = exports;
return exports;

});

class FieldEditor extends Component {}
Soy.register(FieldEditor, templates);
export { FieldEditor, templates };
export default templates;
/* jshint ignore:end */
