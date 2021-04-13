Ext.define('MyExtGenApp.view.journal4.Journal4View',{
    extend: 'Ext.grid.Grid',
    xtype: 'journal4view',
    cls: 'journal4view',
    controller: {type: 'journal4viewcontroller'},
    viewModel: {type: 'journal4viewmodel'},
    store: {type: 'journal4shared'},
    grouped: true,
    requires: [
        'Ext.toolbar.Paging',
        'Ext.ux.PreviewPlugin'
    ],

    title: 'Browse Forums',
    width: 760,
    height: 500,

    autoLoad: true,
    frame: true,
    disableSelection: true,
    loadMask: true,

    plugins: {
        preview: {
            expanded: true,
            bodyField: 'excerpt'
        }
    },

    viewConfig: {
        trackOver: false,
        stripeRows: false
    },

    columns: [{
        text: "Topic",
        dataIndex: 'title',

        flex: 1,
        sortable: false,
        renderer: 'renderTopic'
    }, {
        text: "Author",
        dataIndex: 'username',

        width: 100,
        hidden: true,
        sortable: true
    }, {
        text: "Replies",
        dataIndex: 'replycount',

        width: 70,
        align: 'right',
        sortable: true
    }, {
        text: "Last Post",
        dataIndex: 'lastpost',

        width: 150,
        sortable: true,
        renderer: 'renderLast'
    }],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Displaying topics {0} - {1} of {2}',
        emptyMsg: "No topics to display",

        items: ['-', {
            bind: '{expanded ? "Hide Preview" : "Show Preview"}',
            pressed: '{expanded}',
            enableToggle: true,
            toggleHandler: 'onToggleExpanded'
        }]
    }
});
