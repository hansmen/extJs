Ext.define('MyExtGenApp.view.journal4.Journal4ViewStore', {
    extend: 'Ext.data.Store',
    alias: 'store.journal4viewstore',
    pageSize: 2,
    fields: [
        'name', 'email', 'phone', 'dept'
    ],
    groupField: 'dept',
    data: { items: [
            { name: 'Jean Luc',   email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge" },
            { name: 'ModernWorf', email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", dept: "engine" },
        ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
