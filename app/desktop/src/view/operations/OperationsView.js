Ext.define('MyExtGenApp.view.operations.OperationsView',{
    extend: 'Ext.grid.Grid',
    xtype: 'operationsview',
    cls: 'operationsview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'operationsviewcontroller'},
    viewModel: {type: 'operationsviewmodel'},
    store: {type: 'operationsshared'},
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
