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
  effect: cc.Prefab = null;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this);

    cc.log("onLoad: ", this.node.name);
  }

  // start () {

  // }

  // update (dt) {}

  onTouchBegin(event) {
    let temp = event.getLocation();
    let tempClick = this.node.convertToNodeSpaceAR(temp);

    this.doCreateEffect(tempClick);
  }

  doCreateEffect(pos) {
    const effect = cc.instantiate(this.effect);
    effect.position = pos;
    this.node.addChild(effect);
    cc.log("doCreateEffect: ", this.node.name);

    // 파티클이 끝날 때 함수를 호출하고 싶다면 다음 스케쥴러를 이용할 수 있다.
    cc.director
      .getScheduler()
      .schedule(this.myTickOnce, effect, 0.0, 0, 2.0, false);
  }

  myTickOnce(dt) {
    // 셀렉터타겟이 effect였기에 여기서의 this는 Canvas가 아니다.
    cc.log("myTickOnce: ", this.name, ":", dt);
    const particle = this.getComponent(cc.ParticleSystem);
    if (particle) {
      particle.stopSystem();
      this.destroy();
    }
  }
}
