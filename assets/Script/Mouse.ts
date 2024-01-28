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

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.node.on(cc.Node.EventType.MOUSE_DOWN, this.onMouseDown, this);
    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onMouseEnter, this);
    this.node.on(cc.Node.EventType.MOUSE_MOVE, this.onMouseMove, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onMouseLeave, this);
    this.node.on(cc.Node.EventType.MOUSE_UP, this.onMouseUp, this);
    this.node.on(cc.Node.EventType.MOUSE_WHEEL, this.onMouseWheel, this);
  }

  // start () {

  // }

  // update (dt) {}

  onMouseDown(event) {
    cc.log("onMouseDown");
  }
  onMouseEnter(event) {
    cc.log("onMouseEnter");
  }
  onMouseMove(event) {
    cc.log("onMouseMove");
    const mousePoint = event.getLocation();
    const point = this.node.convertToNodeSpaceAR(mousePoint);
    const angle = this.getAngle(point, this.imgMan.node.position);
    console.log(angle);
    this.imgMan.node.angle = -angle + 180;
  }
  onMouseLeave(event) {
    cc.log("onMouseLeave");
  }
  onMouseUp(event) {
    cc.log("onMouseUp");
  }
  onMouseWheel(event) {
    cc.log("onMouseWheel");
  }

  getAngle(pos1, pos2) {
    let angle = Math.atan2(pos2.x - pos1.x, pos2.y - pos1.y);
    angle = angle * (180 / Math.PI);
    return angle;
  }
}
