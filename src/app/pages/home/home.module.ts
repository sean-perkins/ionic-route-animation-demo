import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: HomePageComponent }])
    ],
    declarations: [HomePageComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class HomePageModule { }
