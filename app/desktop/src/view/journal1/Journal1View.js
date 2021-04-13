Ext.define('MyExtGenApp.view.journal1.Journal1View',{
    extend: 'Ext.grid.Grid',
    xtype: 'journal1view',
    cls: 'journal1view',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'journal1viewcontroller'},
    viewModel: {type: 'journal1viewmodel'},
    store: {type: 'journal1shared'},
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
