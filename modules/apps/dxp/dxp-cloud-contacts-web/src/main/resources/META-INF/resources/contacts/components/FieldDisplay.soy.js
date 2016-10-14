/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from FieldDisplay.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace FieldDisplay.
 * @public
 */

goog.module('FieldDisplay.incrementaldom');

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
  ie_open('div', null, null,
      'class', 'field-display form-group' + (opt_data.selected ? ' selected' : '') + (opt_data.showTools_ ? ' show-tools' : '') + (opt_data.editable ? ' editable' : ''));
    if (opt_data.extra) {
      ie_open('div', null, null,
          'class', 'extra');
        var dyn0 = opt_data.extra;
        if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
      ie_close('div');
    }
    var toolbarActive__soy18 = ! opt_data.selected && opt_data.showTools_ || opt_data.editable;
    var inputAddon__soy19 = toolbarActive__soy18 || opt_data.sourceCount;
    ie_open('div', null, null,
        'class', 'field-box' + (inputAddon__soy19 ? ' input-group' : ''),
        'onMouseEnter', 'handleMouseEnter_',
        'onMouseLeave', 'handleMouseLeave_');
      ie_open_start('input');
          iattr('class', 'form-control' + (inputAddon__soy19 ? ' input-group-addon-input' : ''));
          if (! opt_data.editable) {
            iattr('disabled', '');
          }
          iattr('placeholder', 'field name');
          iattr('type', 'text');
          iattr('value', opt_data.name);
      ie_open_end();
      ie_close('input');
      if (inputAddon__soy19) {
        ie_open('div', null, null,
            'class', 'field-toolbar input-group-addon' + (! opt_data.editable ? ' disabled' : '') + (toolbarActive__soy18 ? ' toolbar-active' : ''));
          if (toolbarActive__soy18) {
            ie_open('div', null, null,
                'class', 'edit-tools');
              if (opt_data.onEdit || opt_data.editable) {
                $action({elementClasses: opt_data.editable ? 'disabled' : '', onClick: 'handleEdit_', iconName: 'gear'}, null, opt_ijData);
              }
              if (opt_data.onDelete) {
                $action({onClick: 'handleDelete_', iconName: 'trash'}, null, opt_ijData);
              }
              if (opt_data.onFlag) {
                $action({onClick: 'handleFlag_', iconName: 'arrow-up-rod'}, null, opt_ijData);
              }
            ie_close('div');
          } else if (opt_data.sourceCount) {
            ie_void('span', null, null,
                'class', 'source-count-icon icon-16-link');
            ie_open('span', null, null,
                'class', 'source-count');
              var dyn1 = opt_data.sourceCount;
              if (typeof dyn1 == 'function') dyn1(); else if (dyn1 != null) itext(dyn1);
            ie_close('span');
          }
        ie_close('div');
      }
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'FieldDisplay.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $action(opt_data, opt_ignored, opt_ijData) {
  ie_open('a', null, null,
      'class', 'action' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''),
      'href', 'javascript:;',
      'onClick', opt_data.onClick);
    ie_void('span', null, null,
        'class', 'icon-16-' + opt_data.iconName);
  ie_close('a');
}
exports.action = $action;
if (goog.DEBUG) {
  $action.soyTemplateName = 'FieldDisplay.action';
}

exports.render.params = ["name","editable","extra","onDelete","onEdit","onFlag","selected","sourceCount","showTools_"];
exports.render.types = {"name":"any","editable":"any","extra":"any","onDelete":"any","onEdit":"any","onFlag":"any","selected":"any","sourceCount":"any","showTools_":"any"};
exports.action.params = ["elementClasses","onClick","iconName"];
exports.action.types = {"elementClasses":"any","onClick":"any","iconName":"any"};
templates = exports;
return exports;

});

class FieldDisplay extends Component {}
Soy.register(FieldDisplay, templates);
export { FieldDisplay, templates };
export default templates;
/* jshint ignore:end */
