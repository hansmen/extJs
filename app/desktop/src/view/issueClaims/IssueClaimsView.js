Ext.define('MyExtGenApp.view.issueClaims.IssueClaimsView',{
    extend: 'Ext.grid.Grid',
    xtype: 'issueClaimsview',
    cls: 'issueClaimsview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'issueClaimsviewcontroller'},
    viewModel: {type: 'issueClaimsviewmodel'},
    store: {type: 'issueClaimsshared'},
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
