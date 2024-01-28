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
  rotationSpeed: number = 50;
  @property
  bLeft: boolean = false;
  bRight: boolean = false;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.bLeft = false;
    this.bRight = false;

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }

  // start () {

  // }

  update(dt) {
    if (this.bLeft) {
      cc.log("bLeft : ", this.imgMan.node.angle);
      this.imgMan.node.angle += dt * this.rotationSpeed;
    } else if (this.bRight) {
      cc.log("bRight : ", this.imgMan.node.angle);
      this.imgMan.node.angle -= dt * this.rotationSpeed;
    }
  }

  onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  }
  onKeyDown(event) {
    cc.log("onKeyDown");
    switch (event.keyCode) {
      case cc.macro.KEY.left:
        this.bLeft = true;
        break;
      case cc.macro.KEY.right:
        this.bRight = true;
        break;
    }
  }

  onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.left:
        this.bLeft = false;
        break;
      case cc.macro.KEY.right:
        this.bRight = false;
        break;
    }
  }
}
