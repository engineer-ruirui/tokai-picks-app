import { Component } from '@angular/core';

@Component({
  selector: 'home-top-carousel',
  templateUrl: 'home-top-carousel.component.html',
  styleUrls: ['home-top-carousel.component.scss']
})
export class MainSlideComponent {

  slideOpts = {
    initialSlide: 1,
    speed: 800,
    autoplay: {
      delay: 2000,
    }
  };

  constructor() {}

}
