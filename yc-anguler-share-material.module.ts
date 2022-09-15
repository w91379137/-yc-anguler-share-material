import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
// 幫助匯入大量的 material 套件
// https://ithelp.ithome.com.tw/articles/10192517

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
  exports: [
    FormsModule,
    MatSliderModule,
    MatSelectModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCheckboxModule,
  ],
})
export class YcAngulerShareMaterialModule { }
