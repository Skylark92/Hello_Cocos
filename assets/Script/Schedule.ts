// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let num = 0;
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // 매 프레임마다 실행하기 : update와 기능이 같다.
    // cc.director.getScheduler().schedule(this.callEveryFrame, this, 0);

    // 지정된 시간마다 실행하기 : 예시는 2초마다 호출
    // update()에 비해 시간 지정이 자유로움
    // cc.director.getScheduler().schedule(this.myTick, this, 2.0);

    // 딜레이 타임 후 한 번 실행하기 : 1.0초 후 실행, 2.0초 간격으로 2번 실행 (this.myTickOnce, this, 2.0, 2, 1.0, false)
    // 마지막 파라미터는 false여야 위와 같이 동작
    cc.director.getScheduler().schedule(this.myTickOnce, this, 2.0, false);
  }

  callEveryFrame(dt) {
    num++;
    if (num > 60) {
      num = 1;
    }

    cc.log("fps..", num);
  }

  myTick(dt) {
    cc.log("tick ********************* " + dt);
  }

  myTickOnce(dt) {
    cc.log("tickOnce after delay : " + dt);
  }
  // start () {

  // }

  // update (dt) {}
  /**
   * @param dt 이전 프레임과 현재 프레임의 시간 차이
   */
}
