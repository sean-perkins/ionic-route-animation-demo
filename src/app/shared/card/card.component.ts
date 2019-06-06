import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Location } from '../../core';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: ['card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() location: Location;

    constructor(
        private element: ElementRef) { }

    ngOnInit() {
        this.element.nativeElement.style.setProperty('--background-image', `url(${this.location.coverPhotoUrl})`);
    }


    toggleLiked(event) {
        event.preventDefault();
        event.stopPropagation();
        this.location.liked = !this.location.liked;
    }

    get likedIcon() {
        if (this.location.liked) {
            return 'star';
        }
        return 'star-outline';
    }

}
