// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property
  moveSpeed: number = 90;
  @property
  imgEnemy = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.imgEnemy = cc.find("Canvas/Enemy");

    // this.doFire();
  }

  // start () {

  // }

  update(dt) {
    this.node.x += dt * this.moveSpeed;

    if (this.node.getBoundingBox().intersects(this.imgEnemy.getBoundingBox())) {
      cc.log("Collision Check! " + dt);
      this.node.destroy();
    }
  }

  doFire() {
    const action = cc.sequence(cc.moveBy(1.5, cc.v2(800, 0)), cc.removeSelf());
    this.node.runAction(action);
  }
}
