Ext.define('ext5.view.chapter2.ClassAlias', { // ①
    extend: 'Ext.panel.Panel', // ②
    alias: 'widget.chapter2-classalias',
//    xtype: 'chapter-classalias',
    initComponent: function () { // ③
        var me = this;
        Ext.apply(this, {
            title: '안녕하세요 환영합니다.^^',
            items: [
                {
                    xtype: 'button',
                    text: 'Click Me!'
                }
            ]
        });
        this.callParent(arguments); // ④
    }
});