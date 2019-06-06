import { Input, Component, OnInit } from '@angular/core';
import { Location } from '../../core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card-carousel',
    templateUrl: 'card-carousel.component.html',
    styleUrls: ['card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {

    @Input() locations: Location[];

    sliderOpts = {
        centeredSlides: true,
        loop: true,
        loopedSlides: 1,
        slidesPerView: 'auto',
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        spaceBetween: 20
    };

    constructor(private router: Router) { }

    ngOnInit() {
        this.sliderOpts.loopedSlides = this.locations.length;
    }

    viewCard(location: Location) {
        this.router.navigate([
            'location',
            location.id
        ], {
                state: { location }
            });
    }
}
