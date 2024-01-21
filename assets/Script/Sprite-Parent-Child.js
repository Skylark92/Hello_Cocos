// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        imgParent: cc.Sprite,
        imgChild: cc.Sprite,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        // 스프라이트의 부모 & 자식 개념

        // 부모
        this.imgParent.node.color = cc.color(0, 255, 0);
        this.imgParent.node.angle = -90.0;
        const parentSize = this.imgParent.node.getContentSize();

        // 자식
        this.imgChild.node.angle = -90.0;
        this.imgChild.node.setPosition(cc.v2(parentSize.width / 2, 0));
    },

    // start () {

    // },

    // update (dt) {},
});
