import { Component } from '@angular/core';
import { ModalService, ToastService, ModalRef } from 'ng-zorro-antd-mobile';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styles: [
    `
      /deep/ .my-drawer {
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      /deep/ .my-drawer .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      /deep/ .my-drawer .am-drawer-sidebar .am-list {
        width: 300px;
        padding: 0;
      }
    `
  ],
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  popup = false
  popup2 = false
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    open: false
  };
  constructor(private _modal: ModalService, private _toast: ToastService) {
    const dataLength = (this.data && this.data.length) || 0;
    let rowCount = Math.ceil(dataLength / 7);
    this.gridData = this.getRows(rowCount, dataLength);
  }
  gridData = [];
  data = Array.from(new Array(7)).map((_val, i) => ({
    icon: '/assets/icon/logo.svg',
    text: `class${i}`
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
      'Review',
      'value for prompt',
      [{ text: 'Cancel' }, { text: 'Submit', onPress: value => console.log(`something input:${value}`) }],
      'default',
      ['100']
    );
  }

  showModal2() {
    this.popup2 = true;
  }

  onClose() {
    this.popup = false;
  }

  showAlert() {
    this._modal.alert('Subscribe', 'Are you sure to subscribe this course for this user?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => this._toast.success('Subscribe success !!!', 1500)}
    ]);
  }

  showAlert2() {
    this._modal.alert('Subscribe', 'Are you sure to add this course to wishlist for this user?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => this._toast.success('Add to wishlist success !!!', 1500)}
    ]);
  }

  onOpenChange(event) {
    console.log(event);
    this.state.open = !this.state.open;
  }
}
