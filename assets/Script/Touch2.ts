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
  imgNemo1: cc.Sprite = null;
  @property(cc.Sprite)
  imgNemo2: cc.Sprite = null;
  @property(cc.Sprite)
  imgNemo3: cc.Sprite = null;

  @property(cc.Label)
  lblTitle: cc.Label = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.lblTitle.node.zIndex = 10;

    this.imgNemo1.node.on(
      cc.Node.EventType.TOUCH_START,
      this.onTouchBegan,
      this.imgNemo1
    );
    this.imgNemo1.node.on(
      cc.Node.EventType.TOUCH_MOVE,
      this.onTouchMoved,
      this.imgNemo1
    );
    this.imgNemo1.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onTouchEnded,
      this.imgNemo1
    );

    this.imgNemo2.node.on(
      cc.Node.EventType.TOUCH_START,
      this.onTouchBegan,
      this.imgNemo2
    );
    this.imgNemo2.node.on(
      cc.Node.EventType.TOUCH_MOVE,
      this.onTouchMoved,
      this.imgNemo2
    );
    this.imgNemo2.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onTouchEnded,
      this.imgNemo2
    );

    this.imgNemo3.node.on(
      cc.Node.EventType.TOUCH_START,
      this.onTouchBegan,
      this.imgNemo3
    );
    this.imgNemo3.node.on(
      cc.Node.EventType.TOUCH_MOVE,
      this.onTouchMoved,
      this.imgNemo3
    );
    this.imgNemo3.node.on(
      cc.Node.EventType.TOUCH_END,
      this.onTouchEnded,
      this.imgNemo3
    );
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
