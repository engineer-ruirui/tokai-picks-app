import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'video-detail',
  templateUrl: 'video-detail.component.html',
  styleUrls: ['video-detail.component.scss']
})
export class VideoDetailComponent {

  constructor(
    private modalController: ModalController
  ) {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
