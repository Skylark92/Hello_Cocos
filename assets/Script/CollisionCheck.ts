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
    cc.director.getCollisionManager().enabled = true;
    cc.director.getCollisionManager().enabledDebugDraw = true;
  }

  // start () {

  // }

  // update (dt) {}

  onCollisionEnter(other) {
    this.node.color = cc.Color.RED;
    cc.log("collision enter : ", other.node.name);
  }

  onCollisionStay(other) {
    // cc.log('collision stay');
  }

  onCollisionExit() {
    this.node.color = cc.Color.WHITE;
    cc.log("collision exit");
  }
}
