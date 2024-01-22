// import { FiniteTimeAction } from './../../creator.d';
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
  imgWoman1: cc.Sprite = null;
  @property(cc.Sprite)
  imgWoman2: cc.Sprite = null;
  @property(cc.Sprite)
  imgBall: cc.Sprite = null;
  @property(cc.Button)
  btnMenu: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.btnMenu.node.on("click", this.doAction, this);
  }

  start() {}

  // update (dt) {}

  doAction() {
    this.imgMan.node.setPosition(-380, 240);
    this.imgWoman1.node.setPosition(-380, 110);
    this.imgWoman2.node.setPosition(-380, -20);
    this.imgBall.node.setPosition(-380, -130);

    // this.doActionEase();
    // this.doActionElastic();
    // this.doActionBounce();
    this.doActionSpeed();
  }

  doActionEase() {
    // 정상 속도
    const move = cc.moveBy(3.0, cc.v2(700, 0));

    // 빨라지기 : 시작이 늦고, 나중이 빠름
    const clone1 = move.clone() as any;
    const ease_in = clone1.easing(cc.easeIn(2.0));

    // 느려지기 : 시작이 빠르고, 나중이 늦음
    const clone2 = move.clone() as any;
    const ease_out = clone2.easing(cc.easeOut(2.0));

    // 빨라졌다 느려지기 : 시작과 끝이 느리고 중간이 빠름
    const clone3 = move.clone() as any;
    const ease_inout = clone3.easing(cc.easeInOut(2.0));

    this.imgMan.node.runAction(move);
    this.imgWoman1.node.runAction(ease_in);
    this.imgWoman2.node.runAction(ease_out);
    this.imgBall.node.runAction(ease_inout);
  }

  doActionElastic() {
    const move = cc.moveBy(3.0, cc.v2(700, 0));

    const clone1 = move.clone() as any;
    const ease_in = clone1.easing(cc.easeElasticIn(1.0));

    const clone2 = move.clone() as any;
    const ease_out = clone2.easing(cc.easeElasticOut(1.0));

    const clone3 = move.clone() as any;
    const ease_inout = clone3.easing(cc.easeElasticInOut(2.0));

    this.imgMan.node.runAction(move);
    this.imgWoman1.node.runAction(ease_in);
    this.imgWoman2.node.runAction(ease_out);
    this.imgBall.node.runAction(ease_inout);
  }

  doActionBounce() {
    const move = cc.moveBy(3.0, cc.v2(700, 0));

    const clone1 = move.clone() as any;
    const ease_in = clone1.easing(cc.easeBounceIn());

    const clone2 = move.clone() as any;
    const ease_out = clone2.easing(cc.easeBounceOut());

    const clone3 = move.clone() as any;
    const ease_inout = clone3.easing(cc.easeBounceInOut());

    this.imgMan.node.runAction(move);
    this.imgWoman1.node.runAction(ease_in);
    this.imgWoman2.node.runAction(ease_out);
    this.imgBall.node.runAction(ease_inout);
  }

  doActionSpeed() {
    const move = cc.moveBy(3.0, cc.v2(700, 0));

    const clone1 = move.clone() as any;
    const speed1 = cc.speed(clone1, 2.0);

    const clone2 = move.clone() as any;
    const speed2 = cc.speed(clone2, 3.0);

    const clone3 = move.clone() as any;
    const speed3 = cc.speed(clone3, 4.0);

    this.imgMan.node.runAction(move);
    this.imgWoman1.node.runAction(speed1);
    this.imgWoman2.node.runAction(speed2);
    this.imgBall.node.runAction(speed3);
  }
}
