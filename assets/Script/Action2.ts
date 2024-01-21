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
  @property(cc.Button)
  btnMenu: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.log("onLoad");
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.btnMenu.node.on("click", this.doAction, this);
  }

  doAction() {
    // 위치 초기화
    this.imgMan.node.setPosition(-360, 0);

    // this.ActionSequence();
    // this.ActionSpawn();
    // this.ActionRepeat();
    // this.ActionRepeatForever();
    this.ActionDelayTime();
  }

  ActionSequence() {
    const action = cc.sequence(
      cc.moveBy(2, cc.v2(600, 0)),
      cc.rotateBy(2, 720)
    );
    this.imgMan.node.runAction(action);
  }

  ActionSpawn() {
    // 4초에 4번 점프(초당 1번)
    // 회전은 2초
    // 점프 2번 동안 회전, 나머지는 그냥 점프
    const action = cc.spawn(
      cc.jumpBy(4, cc.v2(600, 0), 50, 3),
      cc.rotateBy(2, 720)
    );
    this.imgMan.node.runAction(action);
  }

  ActionRepeat() {
    const myActionForward = cc.moveBy(2, cc.v2(600, 0));
    const myActionBack = myActionForward.reverse();
    const myAction = cc.sequence(myActionForward, myActionBack);

    const rep1 = cc.repeat(myAction, 2);

    this.imgMan.node.runAction(rep1);
  }

  ActionRepeatForever() {
    const myActionForward = cc.moveBy(2, cc.v2(600, 0));
    const myActionBack = myActionForward.reverse();
    const myAction = cc.sequence(myActionForward, myActionBack);

    const rep = cc.repeatForever(myAction);

    this.imgMan.node.runAction(rep);
  }

  ActionDelayTime() {
    const act1 = cc.rotateTo(1, 150);
    const act2 = cc.rotateTo(1, 0);
    const act3 = cc.flipX(true);
    const act4 = cc.removeSelf(true);
    const myAction = cc.sequence(
      act1,
      cc.delayTime(2.0),
      act2,
      cc.delayTime(1.0),
      act3,
      cc.delayTime(1.0),
      act4
    );

    this.imgMan.node.runAction(myAction);
  }

  start() {
    cc.log("start");
  }

  // update (dt) {}
}
