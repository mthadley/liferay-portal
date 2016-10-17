<!DOCTYPE html>

<#include init />

<html>

<head>
	<script src="http://cdn.wedeploy.com/api/latest/wedeploy.js"></script>

	<@liferay_util["include"] page=top_head_include />

	<link rel="stylesheet" href="//westyle.wedeploy.io/build/westyle.css">
	<link rel="stylesheet" href="//westyle.wedeploy.io/build/fonts/galano/galano.css">
	<link rel="stylesheet" href="//westyle.wedeploy.io/build/fonts/icon-12/icon-12.css">
	<link rel="stylesheet" href="//westyle.wedeploy.io/build/fonts/icon-16/icon-16.css">
	<link rel="stylesheet" href="//sennajs.com/vendor/senna/build/senna.css">
</head>

<body class="dxp">
	<div class="senna-loading-bar"></div>

	<@liferay_util["include"] page=body_top_include />

	<@liferay_portlet["runtime"]
		portletName="dxp_cloud_portlet"
	/>

	<@liferay_util["include"] page=body_bottom_include />

	<@liferay_util["include"] page=bottom_include />
</body>
</html>
