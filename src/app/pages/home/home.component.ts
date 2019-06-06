import { Component, OnInit } from '@angular/core';
import { Location } from '../../core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomePageComponent implements OnInit {

    locations: Location[];

    countries = ['Dubai', 'China', 'Korea', 'India', 'France'];

    ngOnInit() {
        this.loadLocations();
    }

    openScanner() {
        console.log('Open QR Code Scanner');
    }

    private loadLocations() {
        this.locations = [
            {
                id: 'uuid-1',
                name: 'Maldives',
                distance: '862 KM',
                coverPhotoUrl: 'https://preppywallpapers.com/wp-content/uploads/2018/10/24-iPhone-XR-Wallpaper-Collection-by-Preppy-Wallpapers.jpg',
                rating: 3,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                    'https://wallpaperplay.com/walls/full/6/f/2/324093.jpg',
                    'https://s29581.pcdn.co/wp-content/uploads/2018/04/Plan-a-Trip-to-Maldives-feature2.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-2',
                name: 'Borocay',
                distance: '862 KM',
                coverPhotoUrl: 'https://r1.ilikewallpaper.net/iPhone-8s-7s-6s-wallpapers/download/73030/Nerja--Spain-iPhone-8s-7s-6s-wallpaper-ilikewallpaper_com.jpg',
                rating: 2,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-3',
                name: 'Spain',
                distance: '862 KM',
                coverPhotoUrl: 'https://preppywallpapers.com/wp-content/uploads/2018/10/24-iPhone-XR-Wallpaper-Collection-by-Preppy-Wallpapers.jpg',
                rating: 5,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-4',
                name: 'Dubai',
                distance: '862 KM',
                coverPhotoUrl: 'https://www.backgroundscool.com/wp-content/uploads/2019/04/Dubai-Cloud-City-Landscapes-547x1024.jpg',
                rating: 1,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            },
            {
                id: 'uuid-5',
                name: 'Paris',
                distance: '862 KM',
                coverPhotoUrl: 'http://papers.co/wallpaper/papers.co-na17-sky-blue-eiffel-tower-nature-paris-city-flare-41-iphone-wallpaper.jpg',
                rating: 4,
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sit magnam error repellat omnis culpa, molestias sapiente nam corporis saepe a veritatis, nulla modi illo amet eaque labore iusto hic.',
                relatedImages: [
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/37009/The-beach-ocean-vacation-house-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34957/Beach-Mountain-Sea-Nature-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/34362/Nature-Pure-Crystal-Ocean-Wave-Splash-Beach-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27714/Beach-Blue-Nature-Sea-Holiday-Water-Sky-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                    'https://r1.ilikewallpaper.net/iphone-8-wallpapers/download/27947/Bright-Summer-Cool-Beach-Wave-iphone-8-wallpaper-ilikewallpaper_com_200.jpg',
                ]
            }
        ];
    }


}
