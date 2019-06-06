import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
    selector: 'app-image-carousel',
    templateUrl: 'image-carousel.component.html',
    styleUrls: ['image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

    @Input() images: string[];

    @Output() selectImage = new EventEmitter();

    sliderOpts = {
        slidesPerView: 'auto',
        spaceBetween: 20,
        slidesOffsetBefore: 20
    };

    backgroundImages: SafeStyle[] = [];

    selectedImage: string;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.images.forEach(imageUrl => {
            this.backgroundImages.push(this.sanitizer.bypassSecurityTrustStyle(`url(${imageUrl})`));
        });
    }

    onSelectImage(index: number) {
        const image = this.images[index];
        if (this.selectedImage === image) {
            this.selectedImage = undefined;
        } else {
            this.selectedImage = image;
        }
        this.selectImage.emit(this.selectedImage);
    }

}
