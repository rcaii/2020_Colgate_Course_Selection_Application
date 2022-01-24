import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastService } from "ng-zorro-antd-mobile";
import { HTTP } from "@ionic-native/http/ngx";
import { range } from 'rxjs';

@Component({
  // selector: "app-tab1",
  templateUrl: "details.page.html",
  styleUrls: ["details.page.scss"],
})
export class Details {
  detail: any = {};
  current = "";
  total = "";
  difference ="";
  isSlash = false;

  constructor(
    private http: HTTP,
    private _toast: ToastService,
    private activateInfo: ActivatedRoute,
    private _router: Router
  ) {
    const params = window.location.href.split("/");
    const termCode = params[params.length - 2];
    const crn = params[params.length - 1];

    this.http
      .sendRequest(`https://api.colgate.edu/v1/courses/${termCode}/${crn}`, {
        method: "get",
      })
      .then((res) => {
        this.detail = JSON.parse(res.data)[0];
      });
  }

  saveData = () => {
    let allCourse = JSON.parse(window.localStorage.getItem("allCourse"));
    const result = {
      TITLE: this.detail.TITLE,
      CRN: this.detail.CRN,
      DISPLAY_KEY: this.detail.DISPLAY_KEY,
      INSTRUCTOR1_NAME: this.detail.INSTRUCTOR1_NAME,
      STATUS: this.detail.STATUS,
      SEATS: this.detail.SEATS,
      MEET1_DAYS: this.detail.MEET1_DAYS,
      MEET1_BEGIN_TIME12AM: this.detail.MEET1_BEGIN_TIME12AM,
      MEET1_END_TIME12AM: this.detail.MEET1_END_TIME12AM,
      TERM_CODE: this.detail.TERM_CODE,
    };

    if (allCourse) {
      for (const course of allCourse) {
        if (course.DISPLAY_KEY == this.detail.DISPLAY_KEY) {
          this._toast.fail("Already Added !!!", 1500);
          return;
        }
      }
      allCourse.push(result);
    } else {
      allCourse = [];
      allCourse.push(result);
    }
    window.localStorage.setItem("allCourse", JSON.stringify(allCourse));

    for (let i = 0; i < this.detail.SEATS.length; i++){
        if(this.detail.SEATS[i] == "/"){
          this.isSlash = true;
        }
        else if(this.isSlash == false){
          this.current += this.detail.SEATS[i];
        }
        else{
          this.total += this.detail.SEATS[i];
        }       
    }
    
    if (this.current < this.total){
      this._toast.success("Successfully Added !!! There are still available seat(s)", 2500);
    }
    else{
      this._toast.success("Successfully Added !!! No more seat available", 2500);
    }
  };

  remove = () => {
    const result = [];
    const allCourse = JSON.parse(window.localStorage.getItem("allCourse"));
    for (const subscribeCourse of allCourse) {
      if (this.detail.CRN != subscribeCourse.CRN) {
        result.push(subscribeCourse);
      }
    }

    localStorage.setItem("allCourse", JSON.stringify(result));
    this._toast.success("Successfully Removed !!!", 1500);
  };

  goBack = () => {
    this._router.navigate(["/tabs/tab1"]);
  };
}
