Ext.define('MyExtGenApp.view.directory.DirectoryView',{
    extend: 'Ext.grid.Grid',
    xtype: 'directoryview',
    cls: 'directoryview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'directoryviewcontroller'},
    viewModel: {type: 'directoryviewmodel'},
    store: {type: 'directoryshared'},
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
