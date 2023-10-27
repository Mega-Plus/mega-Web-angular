import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImgDialogComponent } from 'src/app/shared/img-dialog/img-dialog.component';

@Component({
  selector: 'app-program-visual',
  templateUrl: './program-visual.component.html',
  styleUrls: ['./program-visual.component.scss'],
})
export class ProgramVisualComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(
    imgsrc: any,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ) {
    this.dialog.open(ImgDialogComponent, {
      width: '100%',
      height: '60%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        img: imgsrc,
      },
    });
  }
}
