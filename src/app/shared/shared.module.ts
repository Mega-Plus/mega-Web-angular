import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateMainPipe } from './translate-main.pipe';
import { ImgDialogComponent } from './img-dialog/img-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TranslateMainPipe, ImgDialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [TranslateMainPipe],
})
export class SharedModule {}
