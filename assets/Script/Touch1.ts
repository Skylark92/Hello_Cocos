// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  x = 0;
  y = 0;
  @property(cc.Sprite)
  imgMan: cc.Sprite = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // Use enumeration type to register
    // Only touch or mouse events can be registered in the capturing phase
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancelled, this);

    // Use event name to register
    // touchstart, touchmove, touchend, touchcancel
    // node.on('touchstart', this.onTouchBegan, this);

    // Note, thouch events support multi-touch,
    // each touch spot will send one event to the event listener.
    // You can get all the information of touch spot from cc.Touch API:
  }

  // start () {

  // }

  // update (dt) {}

  onTouchBegan(event) {
    const touchPoint = event.touch.getLocation();
    // cc.log("touchPoint : ", touchPoint);
    // Converts a Point to node (local) space coordinates.
    const point = this.node.convertToNodeSpaceAR(touchPoint);
    // cc.log("point : ", point);

    cc.log(
      "onTouchBegan id = " +
        event.touch.getID() +
        ", x = " +
        point.x +
        ", y = " +
        point.y
    );

    this.x = 0;
    this.y = 0;

    // touch Check
    const rect = this.imgMan.node.getBoundingBox();
    if (rect.contains(point)) {
      cc.log("Sprite clicked...");
    }
  }
  onTouchMoved(event) {
    const touchPoint = event.touch.getLocation();
    const point = this.node.convertToNodeSpaceAR(touchPoint);

    let delta = event.touch.getDelta();
    this.x += delta.x;
    this.y += delta.y;
    // console.log("delta : ", delta);

    // cc.log(
    //   "onTouchMoved id = ",
    //   +event.touch.getID() + ", x = " + point.x + ", y = " + point.y
    // );
  }

  onTouchEnded(event) {
    const touchPoint = event.touch.getLocation();
    const point = this.node.convertToNodeSpaceAR(touchPoint);

    cc.log(
      "onTouchEnded id = " +
        event.touch.getID() +
        ", x = " +
        point.x +
        ", y = " +
        point.y
    );
    cc.log("move : " + this.x + " : " + this.y);
  }

  onTouchCancelled(event) {}
}
