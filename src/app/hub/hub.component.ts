import { Component } from '@angular/core';

@Component({
    selector: 'app-hub',
    templateUrl: './hub.component.html'
})

export class HubComponent {
    public elec: boolean;

    public appareilLeds: boolean[];

    constructor() {
        this.elec = true;

        this.appareilLeds = [false, false];
    }
}
