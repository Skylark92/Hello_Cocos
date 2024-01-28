// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Sprite)
  imgNemo1 = null;
  @property(cc.Sprite)
  imgNemo2 = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // 절대값
    // cc.log(Math.abs(-5));
    // cc.log(Math.abs(-2.3));

    // 랜덤값 0 <= 실수값 < 1.0
    // cc.log(Math.random());
    // cc.log(this.getRandom(10, 60));

    // 거리 구하기
    // cc.log(this.imgNemo1.node.position);
    // cc.log(this.imgNemo2.node.position);
    // cc.log(
    //   this.getDistance(this.imgNemo1.node.position, this.imgNemo2.node.position)
    // );

    // 회전각 구하기
    const angle = this.getAngle(
      this.imgNemo1.node.position,
      this.imgNemo2.node.position
    );
    cc.log(angle);
  }

  // start () {

  // }

  // update (dt) {}

  getRandom(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  getDistance(pos1: { x: number; y: number }, pos2: { x: number; y: number }) {
    const x = pos2.x - pos1.x;
    const y = pos2.y - pos1.y;
    const distance = Math.sqrt(x * x + y * y);
    return distance;
  }

  getAngle(pos1, pos2) {
    let angle = Math.atan2(pos2.x - pos1.x, pos2.y - pos1.y);
    angle = angle * (180 / Math.PI);
    return angle;
  }
}
