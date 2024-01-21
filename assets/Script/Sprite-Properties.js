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
        cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

        // 1. Sprite의 속성들
        // this.imgMan.node.setPosition(cc.v2(-200, 0)); // 좌표 지정
        // this.imgMan.node.setScale(2.0, 2.0); // Scale
        // this.imgMan.node.angle = -20.0; // 이미지 회전, degree 수치

        // 2. Sprite의 색
        // this.imgMan.node.color = cc.color(0, 0, 255); // Color
        // this.imgMan.node.opacity = 100; // opacity (0 ~ 255)
        // this.imgMan.node.active = false; // 이미지를 보여줄 것인지에 대한 boolean

        // flip 속성은 지원하지 않는다.
        // action 으로는 사용할 수 있다.


    },

    start() {

    },

    // update (dt) {},
});
