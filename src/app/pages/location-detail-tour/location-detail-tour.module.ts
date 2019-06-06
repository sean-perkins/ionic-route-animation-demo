import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocationDetailTourComponent } from './location-detail-tour.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: LocationDetailTourComponent
            }
        ])
    ],
    declarations: [
        LocationDetailTourComponent
    ],
})
export class LocationDetailTourPageModule { }
