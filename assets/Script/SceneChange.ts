// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.Button)
  btnSceneChange1: cc.Button = null;
  @property(cc.Button)
  btnSceneChange2: cc.Button = null;
  @property(cc.Button)
  btnSceneChange3: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.btnSceneChange1.node.on("click", this.doTransitionScene, this);
    this.btnSceneChange2.node.on(
      "click",
      this.doTransitionSceneWithParam,
      this
    );
    this.btnSceneChange3.node.on(
      "click",
      this.doTransitionSceneWithEffect,
      this
    );
  }

  // start () {

  // }

  // update (dt) {}

  doTransitionScene() {
    cc.director.loadScene("scene2");
  }

  doTransitionSceneWithParam() {
    cc.sys.localStorage.setItem("name", "홍길동");

    cc.director.loadScene("scene2");
  }

  doTransitionSceneWithEffect() {
    this.node.runAction(
      cc.sequence(
        cc.fadeOut(1.0),
        cc.callFunc(() => {
          cc.director.loadScene("scene2");
        })
      )
    );
  }
}
