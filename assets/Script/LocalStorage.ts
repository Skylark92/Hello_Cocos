// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

const UserData = {
  name: "전우치",
  level: 1,
  vip: false,
};
let base64: any;

@ccclass
export default class NewClass extends cc.Component {
  onLoad() {
    // Save Data
    // Type #1:
    cc.sys.localStorage.setItem("name", "홍길동");
    // Type #2:
    const dataString = JSON.stringify(UserData);
    cc.sys.localStorage.setItem("userData", dataString);

    // Read Data
    const sName = cc.sys.localStorage.getItem("name");
    cc.log(sName);

    const rtnUserData = JSON.parse(cc.sys.localStorage.getItem("userData"));
    cc.log(rtnUserData.name);

    // Encryption
    base64 = require("base64");

    // Save Data - Encrypt
    const encrypted = btoa(encodeURI(dataString));
    cc.sys.localStorage.setItem("userData2", encrypted);

    // Read Data - Decrypt
    const cipherText = cc.sys.localStorage.getItem("userData2");
    const decryptionText = decodeURI(atob(cipherText));
    const rtnUserData2 = JSON.parse(decryptionText);
    cc.log(rtnUserData2.name);

    // Remove key-value pair
    // cc.sys.localStorage.removeItem(key);
    // Clear all key-value pair
    // cc.sys.localStorage.clear()
  }

  // start () {

  // }

  // update (dt) {}
}
