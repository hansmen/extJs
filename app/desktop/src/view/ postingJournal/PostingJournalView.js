Ext.define('MyExtGenApp.view.postingJournal.PostingJournalView',{
    extend: 'Ext.grid.Grid',
    xtype: 'postingJournalview',
    cls: 'postingJournalview',
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'postingJournalviewcontroller'},
    viewModel: {type: 'postingJournalviewmodel'},
    store: {type: 'postingJournalshared'},
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
