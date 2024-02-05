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
  button: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  // component가 처음 실행될 때 호출된다.
  // (Scene이 로드되거나, node가 실행되었을 때)
  onLoad() {
    this.button.node.on("click", this.doTransitionScene, this);

    // const username = cc.sys.localStorage.getItem("name");

    // cc.sys.localStorage.removeItem("name");

    // if (username) {
    //   cc.log("name : ", username);
    // }

    cc.log("scene2 : onLoad");
  }

  // start 콜백함수는 component의 첫 실행시에만 호출된다.
  // update의 첫 프레임 이전에 실행된다고 생각하면 된다.
  start() {
    cc.log("scene2 : start");
  }

  // 매 프레임마다 호출된다.
  // update는 모든 animation update 전에 실행된다.
  update(dt) {
    cc.log("scene2 : update, ", dt);
  }

  // animation 업데이트 이후에 뭔가를 실행하고 싶거나,
  // 모든 컴포넌튿즐의 update가 끝나고 뭔가를 하고 싶다면 사용하면 된다.
  protected lateUpdate(dt: number): void {
    cc.log("scene2 : lateUpdate, ", dt);
  }

  // component나 node가 destory() 호출했을 때 호출된다.
  // destroy가 호출된 프레임이 끝나게 되면 실행된다.
  protected onDestroy(): void {
    cc.log("scene2 : onDestroy");
  }

  // 컴포넌트가 달린 node의 active 프로퍼티가 false에서 true가 될 때나,
  // 컴포넌트의 enabled 프로퍼티가 false에서 true가 될 떄 호출된다.
  // 만약 node가 처음 만들어졌고, enabled가 true라면,
  // onLoad 이후에 하지만 onStart 이전에 onEnable 콜백은 실행될 것이다.
  onEnable() {
    cc.log("scene2 : onEnable");
  }

  onDisable() {
    cc.log("scene2 : onDisable");
  }

  //
  doTransitionScene() {
    cc.director.loadScene("scene1");
  }
}
