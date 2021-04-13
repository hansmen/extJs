Ext.define('MyExtGenApp.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',
	style: 'background:red',
	data: {
		name: 'MyExtGenApp',
		navCollapsed:       false,
		navview_max_width:    300,
		navview_min_width:     44,
		topview_height:        75,
		bottomview_height:     50,
		headerview_height:     50,
		footerview_height:     50,
		detailCollapsed:     true,
		detailview_width:      10,
		detailview_max_width: 300,
		detailview_min_width:   0,

	},
	formulas: {
		navview_width: function(get) {
			return get('navCollapsed') ? get('navview_min_width') : get('navview_max_width');
		},
		detailview_width: function(get) {
			return get('detailCollapsed') ? get('detailview_min_width') : get('detailview_max_width');
		}
	},

	stores: {
		menu: {
			"type": "tree",
			"root": {
				"children": [
          			// {
          			// 	"text": "Home",
					// 	"iconCls": "x-fa fa-home",
					// 	"xtype": "homeview",
					// 	"leaf": true,
					// },

					{ text: 'Выверка инкассаций',"iconCls": "x-fa fa-home", "expanded": false, children: [
							{ text: 'Выверка',	"xtype": "reconciliationview", leaf: true },
							{ text: 'Претензии',"xtype": "claimsview", leaf: true},
							{ text: 'Остатки по счетам',"xtype": "leftoversview", leaf: true},
							{ text: 'Загруженные проводки',"xtype": "loadedTransactionsview", leaf: true},
							{ text: 'Сверка остатков',"xtype": "reconciliationResidualsview", leaf: true},
							{ text: 'Журнал проводок',"xtype": "postingJournalview", leaf: true},
						] },
					{ text: 'Эмиссия',"iconCls": "x-fa fa-table", "expanded": false, children: [
							{ text: 'Претензии',	"xtype": "issueClaimsview", leaf: true },
							{ text: 'Карточка ДЦ',"xtype": "cardDCview", leaf: true},
							{ text: 'Счета',"xtype": "accountsview", leaf: true},
							{ text: 'Распоряжения',"xtype": "ordersview", leaf: true},
						] },
					{ text: 'Эквайринг',"iconCls": "x-fa fa-id-badge", "expanded": false, children: [
							{ text: 'Операции',	"xtype": "operationsview", leaf: true },
							{ text: 'Справочник',"xtype": "directoryview", leaf: true},
						] },
					{ text: 'Электронные журналы',"iconCls": "x-fa fa-book", "expanded": false, children: [
							{ text: 'Журнал 1',	"xtype": "journal1view", leaf: true },
							{ text: 'Журнал 2',"xtype": "journal2view", leaf: true},
							{ text: 'Журнал 3',"xtype": "journal3view", leaf: true},
						] },
					//add new items on the next line (from sencha-node generate viewpackage)

				]
			}
		}
	}
});
