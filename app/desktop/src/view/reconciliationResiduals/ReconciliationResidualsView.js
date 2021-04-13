Ext.define('MyExtGenApp.view.reconciliationResiduals.ReconciliationResidualsView',{
    extend: 'Ext.grid.Grid',
    xtype: 'reconciliationResidualsview',
    cls: 'reconciliationResidualsview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'reconciliationResidualsviewcontroller'},
    viewModel: {type: 'reconciliationResidualsviewmodel'},
    store: {type: 'reconciliationResidualsshared'},
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
