import { Input, Component, ViewEncapsulation } from '@angular/core';
import { Location } from '../../core';
import { Router } from '@angular/router';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-card-carousel',
  templateUrl: 'card-carousel.component.html',
  styleUrls: ['card-carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardCarouselComponent {

  @Input() locations: Location[] = [];

  sliderOpts: SwiperOptions = {
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    spaceBetween: 20
  };

  constructor(private router: Router) { }

  viewCard(location: Location) {
    this.router.navigate([
      'location',
      location.id
    ], {
      state: { location }
    });
  }
}
