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
  imgMan1: cc.Sprite = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    const anim = this.imgMan1.getComponent(cc.Animation);

    // loadRes는 지정된 resources 폴더에서 자료를 읽는다.
    cc.loader.loadRes("grossini_anchors", cc.SpriteAtlas, (err, atlas) => {
      cc.log(atlas);
      // sprite.spriteFrame = atlas.getSpriteFrame('grossini_dance_05');
      const spriteFrames = atlas.getSpriteFrames();
      cc.log(spriteFrames);

      const clip = cc.AnimationClip.createWithSpriteFrames(spriteFrames, 5);
      clip.name = "run";
      clip.wrapMode = cc.WrapMode.Loop;
      // clip.speed = 0.3;
      anim.addClip(clip);
      anim.play("run");
    });
  }

  // start () {

  // }

  // update (dt) {}
}
