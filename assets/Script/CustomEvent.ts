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
  btnEvent: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.btnEvent.node.on("click", this.doEvent, this);

    this.node.on("say-hello", this._sayHello, this);
  }

  // start () {

  // }

  // update (dt) {}

  _sayHello(arg1, arg2) {
    cc.log("1: ", arg1, arg2);
  }

  doEvent() {
    // this.node.emit("say-hello", "홍길동", "전우치");

    const enemy = this.node.getChildByName("enemy");
    // console.log(enemy);
    for (let i = 0; i < enemy.childrenCount; i++) {
      enemy.children[i].emit("say-hello", "홍길동", "전우치");
    }
  }
}
