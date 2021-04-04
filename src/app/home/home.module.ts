import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../components/explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import {MainSlideComponentModule} from 'src/app/components/home-top-carousel/home-top-carousel.component.module';
import { VideosListComponentModule } from 'src/app/components/videos-list/videos-list.component.module';
import {VideoDetailComponentModule} from 'src/app/components/video-detail/video-detail.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
    MainSlideComponentModule,
    VideosListComponentModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
