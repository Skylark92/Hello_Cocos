// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
  @property(cc.PageView)
  pageView: cc.PageView = null;
  @property(cc.Button)
  btnLeft: cc.Button = null;
  @property(cc.Button)
  btnRight: cc.Button = null;

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.btnLeft.node.on("click", this.onPrevPage, this);
    this.btnRight.node.on("click", this.onNextPage, this);

    this.pageView.node.on("page-turning", this.callback, this);
  }

  // start () {

  // }

  // update (dt) {}

  onPrevPage() {
    cc.log("onPrevPage");
    const pView = this.pageView.node.getComponent(cc.PageView);
    let nCur = pView.getCurrentPageIndex() - 1;
    if (nCur < 0) {
      nCur = 0;
    }
    pView.setCurrentPageIndex(nCur);
  }

  onNextPage() {
    cc.log("onNextPage");
    const pView = this.pageView.node.getComponent(cc.PageView);
    let nCur = pView.getCurrentPageIndex() + 1;
    const nMax = pView.getPages().length;
    if (nCur > nMax) {
      nCur = nMax;
    }
    pView.setCurrentPageIndex(nCur);
  }

  callback() {
    cc.log("바뀌는 중", this.pageView.getCurrentPageIndex());
  }
}
