Ext.define('MyExtGenApp.view.main.nav.NavViewController', {
	extend: "Ext.app.ViewController",
	alias: "controller.navviewcontroller",

	initViewModel: function(vm) {},

	onTopViewNavToggle: function (button) {
		var vm = this.getViewModel();
		vm.set('navCollapsed', !vm.get('navCollapsed'));
		if(vm.get('navCollapsed')===true) {
			button.setIconCls('x-fa fa-bars');
		}
		else {
			button.setIconCls('x-fa fa-arrow-left');
		}
	},

	onMenuViewSelectionChange: function(tree, node) {
		if (!node) {
				return;
		}
		this.fireViewEvent("select", node);
	}
});
