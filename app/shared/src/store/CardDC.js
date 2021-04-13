Ext.define('MyExtGenApp.store.CardDC', {
    extend: 'Ext.data.Store',
    alias: 'store.cardDCshared',
    model: 'MyExtGenApp.model.CardDC',
    groupField: 'dept',
    data: { items: [
            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", dept: "bridge" },
            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", dept: "security" },
        ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
