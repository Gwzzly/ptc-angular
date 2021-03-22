import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html'
})

export class AppareilComponent {
    @Input()
    public electricity: boolean;

    constructor() {
    }
}
