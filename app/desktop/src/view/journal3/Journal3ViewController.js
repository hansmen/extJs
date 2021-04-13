Ext.define('MyExtGenApp.view.journal3.Journal1ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.journal3viewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    }

});
