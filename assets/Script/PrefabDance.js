// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        const anim = this.getComponent(cc.Animation);

        const animState = anim.play('prefab_dance');
        animState.wrapMode = cc.WrapMode.Loop;
    },

    // start () {

    // },

    // update (dt) {},

    doSomething: function () {
        cc.log(this.node.name, ' : I`m doing something ... ');
    }
});
