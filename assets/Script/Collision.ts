// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Prefab)
  bullet: cc.Prefab = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // 2초마다 bullet 생성
    cc.director.getScheduler().schedule(this.doAutoFire, this, 2.0);
  }

  // start () {

  // }

  // update (dt) {}

  doAutoFire(dt) {
    const pfBullet = cc.instantiate(this.bullet);
    pfBullet.name = "bullet";
    pfBullet.position = new cc.Vec3(-240, 0);
    this.node.addChild(pfBullet);
  }
}
