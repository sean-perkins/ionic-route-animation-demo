import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap, takeUntil } from 'rxjs/operators';
import { Location } from '../../core';
import { Subject } from 'rxjs';
import { IonRouterOutlet, NavController } from '@ionic/angular';

@Component({
    selector: 'app-location-detail',
    templateUrl: 'location-detail.component.html',
    styleUrls: ['location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit, OnDestroy, AfterViewInit {

    location: Location;

    destroy$ = new Subject<boolean>();

    activated = false;

    deactivated = false;

    constructor(
        private element: ElementRef,
        private router: Router,
        private route: ActivatedRoute,
        @Optional() private routerOutlet: IonRouterOutlet,
        private navCtrl: NavController) { }

    ngOnInit() {
        this.route.paramMap
            .pipe(
                takeUntil(this.destroy$),
                map(() => window.history.state),
                tap(state => {
                    if (state.location) {
                        this.location = state.location;
                        this.setBackgroundImage();
                    } else {
                        this.router.navigate(['/tabs/home']);
                    }
                })
            )
            .subscribe();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.activated = true;
        });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
    }

    closeDetail() {
        this.activated = false;
        this.deactivated = true;
        setTimeout(() => {
            if (this.routerOutlet && this.routerOutlet.canGoBack()) {
                this.routerOutlet.pop();
            } else {
                this.navCtrl.navigateBack('/tabs/home');
            }
        }, 300);
    }

    viewTourDetail() {
        this.router.navigate(['/location', this.location.id, 'tour'], {
            state: { location: this.location }
        });
    }

    onSelectImage(image: string) {
        this.setBackgroundImage(image);
    }

    private get hostEl(): HTMLElement {
        return this.element.nativeElement;
    }

    private setBackgroundImage(url = this.location.coverPhotoUrl) {
        this.hostEl.style.setProperty('--background-image', `url(${url})`);
    }

}
