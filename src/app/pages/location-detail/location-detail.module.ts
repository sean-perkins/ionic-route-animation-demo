import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LocationDetailComponent } from './location-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([
            {
                path: '',
                component: LocationDetailComponent
            }
        ])
    ],
    declarations: [
        LocationDetailComponent
    ],
})
export class LocationDetailPageModule { }
