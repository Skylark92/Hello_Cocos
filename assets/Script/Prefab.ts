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
  btnCreate: cc.Button = null;
  @property(cc.Button)
  btnRemove: cc.Button = null;
  @property(cc.Button)
  btnGetComponent: cc.Button = null;
  @property(cc.Button)
  btnCallFuncAll: cc.Button = null;
  @property(cc.Button)
  btnCallFuncOne: cc.Button = null;
  @property(cc.Prefab)
  enemy: cc.Prefab = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    cc.Camera.main.backgroundColor = cc.color(255, 255, 255);

    this.btnCreate.node.on("click", this.doCreate, this);
    this.btnRemove.node.on("click", this.doRemove, this);
    this.btnGetComponent.node.on("click", this.doGetComponent, this);
    this.btnCallFuncAll.node.on("click", this.doCallFuncAll, this);
    this.btnCallFuncOne.node.on("click", this.doCallFuncOne, this);
  }

  // start () {

  // }

  // update (dt) {}

  doCreate() {
    const enemy_root = this.node.getChildByName("enemy");
    // const enemy_root = cc.find('Canvas/enemy');
    const enemy = cc.instantiate(this.enemy);
    enemy.name = "enemy4";
    enemy.addComponent("SelfRemove");
    enemy.position = new cc.Vec3(-140, 50);
    enemy_root.addChild(enemy);
    // enemy.parent = enemy_root;
    // cc.log(enemy.name);
  }

  doRemove() {
    const enemy_root = this.node.getChildByName("enemy");
    const enemy = enemy_root.getChildByName("enemy4");

    enemy.destroy();
  }

  doGetComponent() {
    const enemy = cc.find("Canvas/enemy/enemy3");
    const anim = enemy.getComponent(cc.Animation);
    const animState = anim.getAnimationState("prefab_dance");
    // cc.log(enemy, anim, animState);

    if (animState.isPaused) {
      anim.resume("prefab_dance");
    } else {
      anim.pause("prefab_dance");
    }
  }

  doCallFuncAll() {
    const enemy = this.node.getChildByName("enemy");
    // const enemies = [];
    for (let i = 0; i < enemy.childrenCount; i++) {
      // enemies[i] = enemy.children[i];
      const script = enemy.children[i].getComponent("PrefabDance");
      script.doSomething();
    }
  }

  doCallFuncOne() {
    const enemy = cc.find("Canvas/enemy/enemy3");
    const script = enemy.getComponent("PrefabDance");
    cc.log(script);
    script.doSomething();
  }
}
