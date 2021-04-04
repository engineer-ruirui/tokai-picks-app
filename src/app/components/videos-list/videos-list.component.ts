import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VideoDetailComponent } from 'src/app/components/video-detail/video-detail.component';

@Component({
  selector: 'videos-list',
  templateUrl: 'videos-list.component.html',
  styleUrls: ['videos-list.component.scss']
})
export class VideosListComponent {

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
