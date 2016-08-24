import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';

import AddMenu from 'liferay-metal-addMenu/src/AddMenu';
import SearchContainer from 'liferay-metal-searchContainer/src/SearchContainer';
import SearchContainerIcon from 'liferay-metal-searchContainer/src/SearchContainerIcon.soy';

import templates from './AssetTagsAdminSoyListTags.soy';

class AssetTagsAdmimSoyListTags extends Component {
}

// Register component
Soy.register(AssetTagsAdmimSoyListTags, templates);

export default AssetTagsAdmimSoyListTags;