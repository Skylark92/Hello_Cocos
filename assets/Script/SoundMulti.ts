// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.AudioClip)
  bg1: cc.AudioClip = null;
  @property(cc.AudioClip)
  bg2: cc.AudioClip = null;
  @property(cc.AudioClip)
  effect1: cc.AudioClip = null;
  @property(cc.AudioClip)
  effect2: cc.AudioClip = null;
  @property(cc.AudioClip)
  effect3: cc.AudioClip = null;
  @property(cc.AudioClip)
  effect4: cc.AudioClip = null;

  @property(cc.Button)
  btnPlayMusic: cc.Button = null;
  @property(cc.Button)
  btnStopMusic: cc.Button = null;
  @property(cc.Button)
  btnPlayEffect: cc.Button = null;
  @property(cc.Button)
  btnStopEffect: cc.Button = null;

  maxNum: any;
  _bg1: any;
  _bg2: any;
  _effect1: any;
  _effect2: any;
  _effect3: any;
  _effect4: any;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.btnPlayMusic.node.on("click", this.doPlayMusic, this);
    this.btnStopMusic.node.on("click", this.doStopMusic, this);
    this.btnPlayEffect.node.on("click", this.doPlayEffect, this);
    this.btnStopEffect.node.on("click", this.doStopEffect, this);

    this.maxNum = cc.audioEngine.getMaxAudioInstance();
    cc.log("Max Effect Num : ", this.maxNum);
  }

  // start() {}

  // update (dt) {}

  doPlayMusic() {
    // playMusic은 한 개의 오디오만 가능
    // 두 번째 파라미터 Loop 여부
    this._bg1 = cc.audioEngine.playMusic(this.bg1, true);
    this._bg2 = cc.audioEngine.playMusic(this.bg2, true);
  }

  doStopMusic() {
    if (cc.audioEngine.isMusicPlaying()) {
      cc.log("audio kill");
      cc.audioEngine.stop(this._bg1);
      cc.audioEngine.stop(this._bg2);
    }
  }

  doPlayEffect() {
    this._effect1 = cc.audioEngine.playEffect(this.effect1, true);
    this._effect2 = cc.audioEngine.playEffect(this.effect2, true);
    this._effect3 = cc.audioEngine.playEffect(this.effect3, true);
    this._effect4 = cc.audioEngine.playEffect(this.effect4, true);
  }

  doStopEffect() {
    cc.audioEngine.stop(this._effect1);
    cc.audioEngine.stop(this._effect2);
    cc.audioEngine.stop(this._effect3);
    cc.audioEngine.stop(this._effect4);
  }

  protected onDestroy(): void {
    cc.audioEngine.stopAll();
  }
}
