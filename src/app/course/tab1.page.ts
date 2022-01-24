import { Component, ElementRef, Renderer2 } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalService, ToastService, ModalRef } from "ng-zorro-antd-mobile";

import { HTTP } from "@ionic-native/http/ngx";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  popup = false;
  popup2 = false;
  majors = null;
  courses = null;
  currentMajor = null;
  items = null;
  isShowSearch = false;

  constructor(
    private _modal: ModalService,
    private _toast: ToastService,
    private activateInfo: ActivatedRoute,
    private _router: Router,
    private http: HTTP
  ) {
    const dataLength = (this.data && this.data.length) || 0;
    let rowCount = Math.ceil(dataLength / 7);
    this.http
      .sendRequest("https://api.colgate.edu/v1/courses/search/program-areas", {
        method: "get",
      })
      .then((response) => {
        this.majors = JSON.parse(response.data);
      });

    this.gridData = this.getRows(rowCount, dataLength);
  }
  gridData = [];
  data = Array.from(new Array(7)).map((_val, i) => ({
    icon: "/assets/icon/logo.svg",
    text: `class${i}`,
  }));

  getRows(rowCount: number, dataLength: number) {
    const columnNum = 7;
    const rowArr = new Array();
    for (let i = 0; i < rowCount; i++) {
      rowArr[i] = new Array();
      for (let j = 0; j < columnNum; j++) {
        const dataIndex = i * columnNum + j;
        if (dataIndex < dataLength) {
          rowArr[i][j] = this.data[dataIndex];
        } else {
          rowArr[i][j] = null;
        }
      }
    }
    return rowArr;
  }

  showModal() {
    this.popup = true;
  }

  showPromptDefault() {
    this._modal.prompt(
      "Review",
      "value for prompt",
      [
        { text: "Cancel" },
        {
          text: "Submit",
          onPress: (value) => console.log(`something input:${value}`),
        },
      ],
      "default",
      ["100"]
    );
  }

  redirectTo = (course) => {
    console.log(course);
    window.location.href = `/tabs/details/${course.TERM_CODE}/${course.CRN}`;
  };

  searchCourseByMajor = (major) => {
    console.log(major);
    if (this.currentMajor != major) {
      this.currentMajor = major;
      this.http
        .sendRequest(
          `https://api.colgate.edu/v1/courses/search?keyword=&termCode=202001&program[]=${major}&coreArea=&inquiryArea=&meetTimeMorning=&meetTimeAfternoon=&meetTimeEvening=&openCoursesOnly=`,
          { method: "get" }
        )
        .then((result) => {
          this.courses = JSON.parse(result.data);
        });
    }
  };

  getItems = (event) => {
    this.http
    .sendRequest(
      `https://api.colgate.edu/v1/courses/search?keyword=${event.target.value}&termCode=202001&coreArea=&inquiryArea=&meetTimeMorning=&meetTimeAfternoon=&meetTimeEvening=&openCoursesOnly=`, 
      {
        method: "get",
      })
    .then((result) => {
      this.items = JSON.parse(result.data);
      // console.log(this.items);
    });
  };

  onClear = (event) => {
    this.items = null;
  }

  showSearch = () =>{
    this.isShowSearch = !this.isShowSearch;
    this.items = null;
  }

}
