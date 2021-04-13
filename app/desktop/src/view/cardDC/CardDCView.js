Ext.define('MyExtGenApp.view.cardDC.CardDCView',{
    extend: 'Ext.grid.Grid',
    xtype: 'cardDCview',
    cls: 'cardDCview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'cardDCviewcontroller'},
    viewModel: {type: 'cardDCviewmodel'},
    store: {type: 'cardDCshared'},
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
