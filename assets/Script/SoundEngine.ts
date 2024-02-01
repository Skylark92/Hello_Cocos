// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  // @property(cc.AudioSource)
  // audioSource:cc.AudioSource = null;

  current: any = null;
  @property(cc.AudioClip)
  audioSource: cc.AudioClip = null;

  @property(cc.Button)
  btnPlay: cc.Button = null;
  @property(cc.Button)
  btnPause: cc.Button = null;
  @property(cc.Button)
  btnMuteOn: cc.Button = null;
  @property(cc.Button)
  btnMuteOff: cc.Button = null;
  @property(cc.Button)
  btnResume: cc.Button = null;
  @property(cc.Button)
  btnStop: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.btnPlay.node.on("click", this.doAudioPlay, this);
    this.btnPause.node.on("click", this.doAudioPause, this);
    this.btnMuteOn.node.on("click", this.doAudioMuteOn, this);
    this.btnMuteOff.node.on("click", this.doAudioMuteOff, this);
    this.btnResume.node.on("click", this.doAudioResume, this);
    this.btnStop.node.on("click", this.doAudioStop, this);
  }

  // start () {

  // }

  // update (dt) {}

  doAudioPlay() {
    // this.audioSource.play();
    // const time = this.audioSource.getDuration();
    // cc.log(time);

    // this.current = cc.audioEngine.play(this.audioSource, false, 1);
    this.current = cc.audioEngine.playMusic(this.audioSource, false);
    // this.current = cc.audioEngine.playEffect(this.audioSource. false, 1);
    cc.log(this.current);
    cc.log(typeof this.current);

    const time = cc.audioEngine.getDuration(this.current);
  }

  doAudioPause() {
    // this.audioSource.pause();
    // const time = this.audioSource.getCurrentTime();
    // cc.log(time);
    cc.audioEngine.pause(this.current);
    const time = cc.audioEngine.getCurrentTime(this.current);
    cc.log(time);
  }

  doAudioMuteOn() {
    // this.audioSource.mute = true;
    // const time = this.audioSource.getCurrentTime();
    // cc.log(time);
    cc.audioEngine.setVolume(this.current, 0.0);
    const time = cc.audioEngine.getCurrentTime(this.current);
    cc.log(time);
  }

  doAudioMuteOff() {
    // this.audioSource.mute = false;
    // const time = this.audioSource.getCurrentTime();
    // cc.log(time);
    cc.audioEngine.setVolume(this.current, 1.0);
    const time = cc.audioEngine.getCurrentTime(this.current);
    cc.log(time);
  }

  doAudioResume() {
    // this.audioSource.resume();
    // const time = this.audioSource.getCurrentTime();
    // cc.log(time);
    cc.audioEngine.resume(this.current);
    const time = cc.audioEngine.getCurrentTime(this.current);
    cc.log(time);
  }

  doAudioStop() {
    // if (this.audioSource.isPlaying) {
    //   cc.log("audio is playing... so, I kill audio.");
    //   this.audioSource.stop();
    // }
    if (cc.audioEngine.isMusicPlaying()) {
      cc.log("audio is playing... so, I kill audio.");
      cc.audioEngine.stop(this.current);
    }
  }
}
