import { Component, Inject } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-img-dialog',
  templateUrl: './img-dialog.component.html',
  styleUrls: ['./img-dialog.component.scss'],
})
export class ImgDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
