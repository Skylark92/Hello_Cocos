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
  imgMan: cc.Sprite = null;
  @property
  bSelect: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // 마우스 포인터 위치로 발끝이 고정됨, 해결하시오

    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
  }

  // start () {

  // }

  // update (dt) {}

  onTouchBegan(event) {
    event.stopPropagation();
    const touchPoint = event.touch.getLocation();
    const point = this.node.convertToNodeSpaceAR(touchPoint);
    cc.log("point : ", touchPoint, point);

    // touch check
    this.bSelect = this.imgMan.node.getBoundingBox().contains(point);
  }

  onTouchMoved(event) {
    if (this.bSelect) {
      const touchPoint = event.touch.getLocation();
      const point = this.node.convertToNodeSpaceAR(touchPoint);
      const angle = this.getAngle(point, this.imgMan.node.position);
      this.imgMan.node.angle = -angle;
    }
  }

  onTouchEnded(event) {}

  getAngle(pos1, pos2) {
    let angle = Math.atan2(pos2.x - pos1.x, pos2.y - pos1.y);
    angle = angle * (180 / Math.PI);
    return angle;
  }
}
