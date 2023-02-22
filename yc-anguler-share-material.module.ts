import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// 幫助匯入大量的 material 套件
// https://ithelp.ithome.com.tw/articles/10192517
//
// components
// https://material.angular.io/components/categories
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
// cdk
// https://material.angular.io/cdk/categories
import { DragDropModule } from '@angular/cdk/drag-drop';

const ImportExports = [
  CommonModule,
  FormsModule,
  // components
  MatSliderModule,
  MatSelectModule,
  MatDialogModule,
  MatSlideToggleModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatIconModule,
  // cdk
  DragDropModule,
]
@NgModule({
  declarations: [],
  imports: ImportExports,
  exports: ImportExports,
})
export class YcAngulerShareMaterialModule { }
