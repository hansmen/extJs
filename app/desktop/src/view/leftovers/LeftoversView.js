Ext.define('MyExtGenApp.view.leftovers.LeftoversView',{
    extend: 'Ext.grid.Grid',
    xtype: 'leftoversview',
    cls: 'leftoversview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'leftoversviewcontroller'},
    viewModel: {type: 'leftoversviewmodel'},
    store: {type: 'leftoversshared'},
    grouped: true,
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {text: 'Email',dataIndex: 'email',editable: true, width: 230},
        {
            text: 'Phone',
            dataIndex: 'phone',
            editable: true,
            width: 150
        }
    ],
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
