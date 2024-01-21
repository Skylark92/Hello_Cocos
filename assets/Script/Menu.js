// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties: {
        lblTitle: cc.Label,
        btnLeft: cc.Button,
        btnRight: cc.Button,

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

    onLoad() {
        this.btnLeft.node.on('click', this.changeText, this);
        this.btnRight.node.on('click', this.changeText, this);
    },

    changeText(sender) {
        switch (sender.node.name) {
            case 'btnLeft':
                this.lblTitle.string = '홍길동';
                break;
            case 'btnRight':
                this.lblTitle.string = '전우치';
                break;
            default:
                break;
        }
    }

    // start () {

    // },

    // update (dt) {},
});
