// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        imgMan: cc.Sprite,
        imgWoman: cc.Sprite,
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
        // 흰색 배경
        cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

        // 기본 zIndex 값은 0
        console.log(this.imgMan.node.zIndex);
        console.log(this.imgWoman.node.zIndex);
        this.imgMan.node.zIndex = 1;

    },

    start() {

    },

    // update: function (dt) {},
});
