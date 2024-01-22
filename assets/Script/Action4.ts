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
  @property(cc.Label)
  lblText1: cc.Label = null;
  @property(cc.Label)
  lblText2: cc.Label = null;
  @property(cc.Label)
  lblText3: cc.Label = null;
  @property(cc.Button)
  btnMenu: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.btnMenu.node.on("click", this.doAction, this);
  }

  // start () {

  // }

  // update (dt) {}

  doAction(event) {
    const action = cc.sequence(
      cc.place(cc.v2(-240, 150)),
      cc.delayTime(1.5),
      cc.hide(),
      cc.delayTime(1.5),
      cc.show(),
      cc.callFunc(this.callback1, this),
      cc.delayTime(1.5),
      cc.callFunc(this.callback2, this, 111),
      cc.delayTime(1.5),
      cc.callFunc(
        function () {
          this.lblText3.string = "callback 3 called";
        }.bind(this)
      ),
      cc.removeSelf(true)
    );
    this.imgMan.node.runAction(action);
  }

  callback1(target) {
    cc.log("callback 1 called");
    this.lblText1.string = "callback 1 called";
  }
  callback2(target, data) {
    cc.log("callback 2 called" + data);
    this.lblText2.string = "callback 2 called";
  }
  callback3(target) {
    cc.log("callback 3 called");
    this.lblText3.string = "callback 3 called";
  }
}
