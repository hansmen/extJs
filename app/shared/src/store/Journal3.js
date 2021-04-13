Ext.define('MyExtGenApp.store.Journal3', {
    extend: 'Ext.data.Store',
    alias: 'store.journal3shared',
    pageSize: 3,
    model: 'MyExtGenApp.model.Journal3',
    groupField: 'dept',
    data: { items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "655-111-1111", dept: "bridge" },
            { name: 'Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1611", dept: "modern" },
            { name: 'Jean', email: "jeanluc.picard@enterprise.com", phone: "555-191-1111", dept: "bridge" },
            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "255-222-2222", dept: "security" },
            { name: 'Hal',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2612", dept: "modern" },
            { name: 'Kane',     email: "worf.moghsson@enterprise.com",  phone: "855-222-2292", dept: "security" },
        ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    },
});
