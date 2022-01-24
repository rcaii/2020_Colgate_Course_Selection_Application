
import { Component } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  allCourse = null;
  constructor(){

  }
 

  ngAfterViewInit() {
    console.log(1);
    this.allCourse = JSON.parse(window.localStorage.getItem("allCourse"));
  }

  redirectTo = (course) => {
    console.log(course);
    window.location.href = `/tabs/details/${course.TERM_CODE}/${course.CRN}`;
  };

}
