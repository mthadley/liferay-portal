/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package com.liferay.dxp.cloud.contacts.internal.portlet.action;

import com.liferay.portal.kernel.portlet.bridges.mvc.MVCResourceCommand;

import com.wedeploy.api.WeDeploy;

import javax.portlet.PortletException;
import javax.portlet.ResourceRequest;
import javax.portlet.ResourceResponse;

import org.osgi.service.component.annotations.Component;

import java.io.IOException;

/**
 * @author Michael Hadley
 */
@Component(
	immediate = true,
	property = {
		"javax.portlet.name=dxp_cloud_portlet",
		"mvc.command.name=/contacts/Proxy"
	},
	service = MVCResourceCommand.class
)
public class ProxyMVCResourceCommand implements MVCResourceCommand {

	@Override
	public boolean serveResource(
		ResourceRequest resourceRequest, ResourceResponse resourceResponse)
		throws PortletException {

		try {
			resourceResponse.getWriter().write(
				WeDeploy
					.url("http://docker-engine-wcm:9010/api/jsonws/SCVUser.scvuserjsonws/get-fields")
					.auth("test@liferay.com", "test")
					.get()
					.body()
			);
		}
		catch (IOException e) {
			e.printStackTrace();
		}

		return false;
	}

}
