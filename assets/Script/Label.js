// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
  extends: cc.Component,

  properties: {
    lblLabel4: cc.Label,
    lblLabel6: cc.Label,
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
    // Outline
    const outline = this.lblLabel4.node.addComponent(cc.LabelOutline);
    outline.color = cc.Color.RED;
    outline.width = 3;

    // Shadow
    const shadow = this.lblLabel6.node.addComponent(cc.LabelShadow);
    shadow.color = cc.Color.RED;
    shadow.offset = cc.v2(5, -5);
  },

  start() {

  },

  // update (dt) {},
});
