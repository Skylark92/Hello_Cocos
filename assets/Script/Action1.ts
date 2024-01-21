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
  @property(cc.Sprite)
  imgWoman: cc.Sprite = null;
  @property(cc.Button)
  btnMenu: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // 버튼에 이벤트 함수 연결
    this.btnMenu.node.on("click", this.doAction, this);
  }

  doAction() {
    // 위치 초기화
    this.imgMan.node.setPosition(-360, 200);
    this.imgWoman.node.setPosition(-360, -50);

    this.doActionMove();
    this.doActionJump();
  }

  doActionMove() {
    const myActionTo = cc.moveTo(2, cc.v2(360, 200));
    const myActionBy = cc.moveBy(2, cc.v2(360, 200));

    this.imgMan.node.runAction(myActionTo);
    this.imgWoman.node.runAction(myActionBy);
  }

  doActionJump() {
    const myActionTo = cc.jumpTo(2, cc.v2(400, 0), 50, 3);
    const myActionBy = cc.jumpBy(2, cc.v2(400, 0), 50, 3);

    this.imgMan.node.runAction(myActionTo);
    this.imgWoman.node.runAction(myActionBy);
  }

  // start () {

  // }

  // update (dt) {}
}
