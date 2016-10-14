'use strict';

import core from 'metal';
import templates from './AddField.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './FieldPicker.es';

function normalizeFieldNames(names) {
	return names.map(name => ({
		name,
		id: name
	}));
}

class AddField extends Component {
	created() {
		this.getMappingDataSourceNames();
	}

	handleSave_() {
		this.onSave(
			{
				destinationField: this.destinationFieldName_,
				mappingDataSourceId: this.sourceId_,
				modelName: this.sourceTableId_,
				sourceField: this.sourceFieldId_
			}
		);
	}

	getMappingDataSourceNames() {
		Liferay.Service(
			'/osb_scv.mappingdatasource/get-mapping-data-source-names',
			{},
			mappingDataSourceNames_ => {
				this.mappingDataSourceNames_ = mappingDataSourceNames_.map(
					field => {
						field.id = field.mappingDataSourceId;

						return field;
					}
				);
			}
		);
	}

	getMappingDataSourceTableNames(mappingDataSourceId) {
		Liferay.Service(
			'/osb_scv.mappingdatasource/get-mapping-data-source-table-names',
			{
				mappingDataSourceId
			},
			mappingDataSourceTableNames_ => {
				this.mappingDataSourceTableNames_ = normalizeFieldNames(mappingDataSourceTableNames_);
			}
		);
	}

	getMappingDataSourceFieldNames(mappingDataSourceId, tableName) {
		Liferay.Service(
			'/osb_scv.mappingdatasource/get-mapping-data-source-field-names',
			{
				mappingDataSourceId,
				tableName
			},
			mappingDataSourceFieldNames_ => {
				this.mappingDataSourceFieldNames_ = normalizeFieldNames(mappingDataSourceFieldNames_);
			}
		);
	}

	handleDestinationFieldChange_(event) {
		this.destinationFieldName_ = event.target.value;
	}

	handleSourceIdChange_(id) {
		this.sourceId_ = id;

		this.getMappingDataSourceTableNames(id);
	}

	handleSourceTableIdChange_(id) {
		this.sourceTableId_ = id;

		this.getMappingDataSourceFieldNames(this.sourceId_, id);
	}

	handleSourceFieldIdChange_(id) {
		this.sourceFieldId_ = id;
	}
}

AddField.STATE = {
	destinationFieldName_: {
		validator: core.isString,
		value: ''
	},

	sourceId_: {
		value: null
	},

	sourceFieldId_: {
		value: null
	},

	sourceTableId_: {
		value: null
	},

	mappingDataSourceNames_: {
		validator: core.isArray,
		value: []
	},

	mappingDataSourceFieldNames_: {
		validator: core.isArray,
		value: []
	},

	mappingDataSourceTableNames_: {
		validator: core.isArray,
		value: []
	},

	onSave: {
		validator: core.isFunction,
		value: core.nullFunction
	},

	onCancel: {
		validator: core.isFunction,
		value: core.nullFunction
	}
};

Soy.register(AddField, templates);

export default AddField;
