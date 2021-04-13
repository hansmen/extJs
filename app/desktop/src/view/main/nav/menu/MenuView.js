Ext.define('MyExtGenApp.view.nav.menu.MenuView', {
	extend: 'Ext.list.Tree',
	xtype: 'menuview',
	style: 'background:#f4f5f7',
	ui: 'nav',
	requires: [
		'Ext.data.TreeStore',
	],
	scrollable: true,
	bind: { 
		store: '{menu}', 
		micro: '{navCollapsed}'
	},
	expanderFirst: false,
	expanderOnly: false
});
