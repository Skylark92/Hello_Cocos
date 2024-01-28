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
    cc.log("1 : " + this.node.name);
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
  }

  // start () {

  // }

  // update (dt) {}

  onTouchBegan(event) {
    event.stopPropagation();

    const target = event.getCurrentTarget();
    cc.log(target.name);
    target.opacity = 150;
    target.zIndex = 1;
  }

  onTouchMoved(event) {
    event.stopPropagation();

    const target = event.getCurrentTarget();
    const pos = target.getPosition();
    const delta = event.touch.getDelta();
    // const move = cc.v2(pos.x + delta.x, pos.y + delta.y);
    const move = pos.add(delta);

    target.setPosition(move);
  }

  onTouchEnded(event) {
    event.stopPropagation();
    const target = event.getCurrentTarget();

    target.opacity = 255;
    target.zIndex = 0;
  }
}
