import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoDetailComponent } from 'src/app/components/video-detail/video-detail.component';

@Component({
  selector: 'member-collection',
  templateUrl: 'member-collection.component.html',
  styleUrls: ['member-collection.component.scss']
})
export class MemberCollectionComponent {

  constructor(
    private modalController: ModalController
  ) {}

  slideOpts = {
    // initialSlide: 1,
    // speed: 800,
      // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      }
    }
  };

  async presentModal() {
    const modal = await this.modalController.create({
      component: VideoDetailComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}
