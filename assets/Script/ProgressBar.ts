// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

let bProgress = true;

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  //   @property(Number)
  //   speed = 1;
  //   @property(cc.ProgressBar)
  //   pbProgress1: cc.ProgressBar = null;
  //   @property(cc.ProgressBar)
  //   pbProgress2 = null;
  @property(cc.Sprite)
  imgWoman1 = null;
  @property(cc.Sprite)
  imgWoman2 = null;
  @property(cc.Button)
  btnAction = null;

  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    // this.pbProgress1.progress = 0;
    // this.pbProgress2.progress = 0;

    this.btnAction.node.on("click", this.doAction, this);
  }

  // start () {

  // }

  update(dt) {
    // this._updateProgressBar(dt);
  }

  //   _updateProgressBar(dt) {
  //     let progress = this.pbProgress1.progress;

  //     if (progress < 1.0 && bProgress) {
  //       progress += dt * this.speed;
  //     } else {
  //       progress -= dt * this.speed;
  //       bProgress = progress <= 0;
  //     }
  //     this.pbProgress1.progress = progress;
  //     this.pbProgress2.progress = progress;
  //   }

  doAction() {
    this.SpriteProgressToRadial();
  }

  SpriteProgressToRadial() {
    this.imgWoman1.type = cc.Sprite.Type.FILLED;
    this.imgWoman1.FillType = cc.Sprite.FillType.RADIAL;
    this.imgWoman1.fillCenter = new cc.Vec2(0.5, 0.5);
    // this.imgWoman1.fillStart = 0.0; // 3시 방향에서 시작
    this.imgWoman1.fillStart = 0; // 12시 방향에서 시작
    this.imgWoman1.fillRange = 0;

    this.imgWoman2.type = cc.Sprite.Type.FILLED;
    this.imgWoman2.fillType = cc.Sprite.FillType.VERTICAL;
    this.imgWoman2.fillCenter = new cc.Vec2(0.5, 0.5);
    this.imgWoman2.fillStart = 1;
    this.imgWoman2.fillRange = 0;

    cc.director.getScheduler().schedule(this.myTick, this, 1 / 60);
  }

  myTick(dt) {
    cc.log(dt);
    this.imgWoman1.fillRange += 1 / 60;
    this.imgWoman2.fillRange -= 1 / 60;
  }
}
