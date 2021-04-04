import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemberCollectionComponent } from './member-collection.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  declarations: [MemberCollectionComponent],
  exports: [MemberCollectionComponent]
})
export class MemberCollectionComponentModule {}
