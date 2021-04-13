Ext.define('MyExtGenApp.view.homework.HomeworkView',{
    xtype: 'homeworkview',
    cls: 'homeworkview',
    controller: {type: 'homeworkviewcontroller'},
    viewModel: {type: 'homeworkviewmodel'},
    requires: [],
    extend: 'Ext.Container',
    scrollable: true,
    html: `<div style="user-select: text !important;">

homeworkview
</div>`
});