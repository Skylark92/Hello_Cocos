// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    const anim = this.getComponent(cc.Animation);

    const animState = anim.play("scale");
    animState.wrapMode = cc.WrapMode.Loop;
  }

  // start () {

  // }

  // update (dt) {}
}
