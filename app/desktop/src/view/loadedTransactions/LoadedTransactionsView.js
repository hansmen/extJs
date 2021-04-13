Ext.define('MyExtGenApp.view.loadedTransactions.LoadedTransactionsView',{
    extend: 'Ext.grid.Grid',
    xtype: 'loadedTransactionsview',
    cls: 'loadedTransactionsview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'loadedTransactionsviewcontroller'},
    viewModel: {type: 'loadedTransactionsviewmodel'},
    store: {type: 'loadedTransactionsshared'},
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
