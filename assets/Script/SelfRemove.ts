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
    cc.log("컴포넌트로 추가되었어요~!");

    // Type #1 - Action
    const act = cc.sequence(cc.delayTime(5.0), cc.removeSelf(true));

    // this.node.runAction(act);

    // Type #2 - Schedule Script
    cc.director
      .getScheduler()
      .schedule(this.myTickOnce, this, 0.0, 0, 5.0, false);
  }

  // start () {

  // }

  // update (dt) {}

  myTickOnce(dt) {
    this.onDestory();
    this.node.destroy();
  }

  onDestory() {
    cc.log("destroy 호출");
  }
}
