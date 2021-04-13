Ext.define('MyExtGenApp.view.claims.ClaimsView',{
    extend: 'Ext.grid.Grid',
    xtype: 'claimsview',
    cls: 'claimsview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'claimsviewcontroller'},
    viewModel: {type: 'claimsviewmodel'},
    store: {type: 'claimsshared'},
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
