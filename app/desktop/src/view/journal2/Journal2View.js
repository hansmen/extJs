Ext.define('MyExtGenApp.view.journal2.Journal2View',{
    extend: 'Ext.grid.Grid',
    xtype: 'journal2view',
    cls: 'journal2view',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'journal2viewcontroller'},
    viewModel: {type: 'journal2viewmodel'},
    store: {type: 'journal2shared'},
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
