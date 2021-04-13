Ext.define('MyExtGenApp.store.Journal4', {
    extend: 'Ext.data.Store',
    alias: 'store.journal4shared',
    groupField: 'dept',

    model: 'MyExtGenApp.model.grid.ForumThread',

    pageSize: 50,
    remoteSort: true,

    sorters: [{
        property: 'lastpost',
        direction: 'DESC'
    }],

    data: { items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "655-111-1111", dept: "bridge" },
            { name: 'Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1611", dept: "modern" },
        ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
});
