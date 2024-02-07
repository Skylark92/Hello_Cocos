// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.EditBox)
  editName: cc.EditBox = null;
  @property(cc.EditBox)
  editPassword: cc.EditBox = null;
  @property(cc.EditBox)
  editEmail: cc.EditBox = null;
  // LIFE-CYCLE CALLBACKS:

  onLoad() {}

  // start () {}

  // update (dt) {}

  onEditDidBegan(event) {
    console.log("onEditDidBegan : ", event.node.name);
  }

  // This method is called when an edit box loses focus after keyboard is hidden.
  onEditDidEnded(event) {
    console.log("onEditDidEnded : ", event.node.name);
  }

  // This method is called when the edit box text was changed
  onTextChanged(text, event) {
    console.log("onTextChanged : ", event.node.name, " : ", text);
  }

  onEditingReturn(event) {
    console.log("onEditingReturn : ", event.node.name);
  }
}
