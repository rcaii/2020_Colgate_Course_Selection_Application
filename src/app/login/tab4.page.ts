import { Component } from "@angular/core";
import { ToastService } from "ng-zorro-antd-mobile";

@Component({
  selector: "app-login",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
})
export class LoginPage {
  username = "";
  pwd = "";
  constructor(private _toast: ToastService) {}

  inputUsername(e) {
    this.username = e;
  }
  inputPwd(e) {
    this.pwd = e;
  }

  login() {
    console.log(this.username);
    console.log(this.pwd);
    if (this.username === "" && this.pwd === "") {
      window.location.href = "/tabs/tab1";
    } else {
      this._toast.fail("Load failed !!!", 1000);
    }
  }
}
