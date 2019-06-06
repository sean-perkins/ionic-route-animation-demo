import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-star-rating',
    templateUrl: 'star-rating.component.html',
    styleUrls: ['star-rating.component.scss']
})
export class StarRatingComponent {

    @Input() rating = 0;

    get filledStars() {
        return new Array(this.rating || 0);
    }

    get unfilledStars() {
        return new Array(5 - (this.rating || 0));
    }

}
