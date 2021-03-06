import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nz-demo-alert-4-type-message',
  template: `
    <nz-alert [nzType]="'success'" [nzMessage]="'Success Text'"
      [nzDescription]="'Success Description Success Description Success Description'">
    </nz-alert>

    <nz-alert [nzType]="'info'" [nzMessage]="'Info Text'"
      [nzDescription]="'Info Description Info Description Info Description Info Description'">
    </nz-alert>

    <nz-alert [nzType]="'warning'" [nzMessage]="'Warning Text'"
      [nzDescription]="'Warning Description Warning Description Warning Description Warning Description'">
    </nz-alert>

    <nz-alert [nzType]="'error'" [nzMessage]="'Error Text'"
      [nzDescription]="'Error Description Error Description Error Description Error Description'">
    </nz-alert>
  `
})

export class NzDemoAlert4TypeMessageComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
