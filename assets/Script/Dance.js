// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        anim: cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.anim = this.getComponent(cc.Animation);
        this.animState = this.anim.getAnimationState('event_dance');
        this.animState.wrapMode = cc.WrapMode.Loop;
        this.anim.play('event_dance');

        this.node.on('say-hello', this._sayHello, this);
    },

    _sayHello: function (arg1, arg2) {
        cc.log('2: ', arg1, arg2);
        this.doSomething();
    },

    doSomething: function () {
        if (this.animState.isPaused) {
            this.anim.resume('event_dance');
        } else {
            this.anim.pause('event_dance');
        }
    }

    // start () {

    // },

    // update (dt) {},
});
