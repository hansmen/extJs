Ext.define('MyExtGenApp.view.main.nav.top.TopView', {
	extend: 'Ext.Toolbar',
	xtype: 'topview',
	cls: 'topview',
	shadow: false,
	items: [
		{
			xtype: 'container', 
			cls: 'topviewtext',
			bind: { 
				html: 'Сайбер-ПРО',
				hidden: '{navCollapsed}' 
			}
		},
		'->',
		{
			xtype: 'button',
			ui: 'topviewbutton',
			reference: 'navtoggle',
			handler: 'onTopViewNavToggle',
			iconCls: 'x-fa fa-arrow-left'
		}
	]
});