import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { CardComponent } from './card/card.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { IonicModule } from '@ionic/angular';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { CountryFilterComponent } from './country-filter/country-filter.component';
import { TextComponent } from './text/text.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [
        HeadingComponent,
        CardComponent,
        CardCarouselComponent,
        StarRatingComponent,
        CountryFilterComponent,
        TextComponent,
        ImageCarouselComponent
    ],
    exports: [
        CommonModule,
        IonicModule,
        HeadingComponent,
        CardComponent,
        CardCarouselComponent,
        CountryFilterComponent,
        TextComponent,
        ImageCarouselComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class SharedModule { }
