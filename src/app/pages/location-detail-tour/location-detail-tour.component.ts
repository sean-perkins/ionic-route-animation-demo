import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, takeUntil } from 'rxjs/operators';
import { Location } from '../../core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-location-detail-tour',
    templateUrl: 'location-detail-tour.component.html',
    styleUrls: ['location-detail-tour.component.scss']
})
export class LocationDetailTourComponent implements OnInit, OnDestroy {

    location: Location;

    destroy$ = new Subject<boolean>();

    activated = false;

    constructor(
        private element: ElementRef,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap
            .pipe(
                takeUntil(this.destroy$),
                map(() => window.history.state),
                tap(state => {
                    if (state.location) {
                        this.location = state.location;
                        this.setBackgroundImage();
                        setTimeout(() => {
                            this.activated = true;
                        });
                    } else {
                        this.router.navigate(['/tabs/home']);
                    }
                })
            )
            .subscribe();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    private get hostEl(): HTMLElement {
        return this.element.nativeElement;
    }

    private setBackgroundImage() {
        this.hostEl.style.setProperty('--background-image', `url(${this.location.coverPhotoUrl})`);
    }

}
