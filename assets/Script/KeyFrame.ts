// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

let num = 0;
@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Label)
  lblDesc: cc.Label = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    const anim = this.getComponent(cc.Animation);

    const animState = anim.play("rotation");
    animState.wrapMode = cc.WrapMode.Loop;
  }

  OnScaleEnd() {
    this.lblDesc.string = `${++num}`;
    cc.log("scale animation end 2 ...");
  }

  // start () {

  // }

  // update (dt) {}
}
