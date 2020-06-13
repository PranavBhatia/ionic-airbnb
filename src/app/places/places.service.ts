import {Injectable} from '@angular/core';
import {Place} from "./place.model";

@Injectable({
    providedIn: 'root'
})
export class PlacesService {
    private _places = [
        new Place(
            'p1',
            'Manhattan Mansion',
            'In the heart of NYC!',
            'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg',
            149.99
        ),
        new Place(
            'p2',
            'Amour Toujours',
            'A romantic place in Paris!',
            'https://media.bizj.us/view/img/10987479/mario46*1200xx1920-1080-0-100.jpg',
            189.99
        ),
        new Place(
            'p3',
            'The foggy palace',
            'Not your average city trip!',
            'https://i.pinimg.com/originals/18/30/b1/1830b1e06b0d68f0cab6809609ddc4cf.jpg',
            99.99
        )
    ];

    constructor() {
    }

    get places() {
        return [...this._places];
    }
}
