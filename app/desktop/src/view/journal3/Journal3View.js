Ext.define('MyExtGenApp.view.journal3.Journal3View',{
    extend: 'Ext.grid.Grid',
    xtype: 'journal3view',
    cls: 'journal3view',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'journal3viewcontroller'},
    viewModel: {type: 'journal3viewmodel'},
    store: {type: 'journal3shared'},
    grouped: true,
    plugins: {
        rowedit: {
            autoConfirm: false,
        },
        pagingtoolbar: true
    },
    title: 'Customers',
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
    layout: 'fit',
    listeners: {
        canceledit: 'onEditCancelled'
    }
});
