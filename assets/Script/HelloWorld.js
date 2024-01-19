cc.Class({
    extends: cc.Component,

    properties: {
        imgCocos: cc.Sprite,
    },

    // use this for initialization
    onLoad: function () {
        // let size = cc.winSize;
        // cc.log("width : " + size.width);

        // *** Position ***
        // Type 1 :
        // this.imgCocos.node.x = 300;
        // this.imgCocos.node.y = 100;
        // Type 2 :
        // this.imgCocos.node.setPosition(-300, 100);
        // Type 3 :
        // this.imgCocos.node.setPoisition(cc.v2(-300, -100));
        // Type 4 :
        // this.imgCocos.node.position = cc.v2(300, -100);

        // *** Anchor Point x:0.5 y:0.5 ***
        // this.imgCocos.node.setPosition(-480, -320);
        // Type 1 :
        // this.imgCocos.node.anchorX = 0.5;
        // this.imgCocos.node.anchorY = 0.5;
        // Type 2 :
        // this.imgCocos.node.setAnchorPoint(1, 1);

        // *** Scale ***
        // Type 1 :
        // this.imgCocos.node.scaleX = 0.5;
        // this.imgCocos.node.scaleY = 0.5;
        // Type 2 :
        // this.imgCocos.node.setScale(2, 2);

        // *** Size ( width & height ) w:195 h:270 ***
        // Type 1 :
        // this.imgCocos.node.width = 100;
        // this.imgCocos.node.height = 100;
        // // Type 2 :
        // // this.imgCocos.node.setContentSize(300, 300);
        // // Type 3 :
        // this.imgCocos.node.setContentSize(cc.Size(300, 100));
        // 2.3.2 버전 작동 안 함

    },

    // called every frame
    // update: function (dt) { },
});
