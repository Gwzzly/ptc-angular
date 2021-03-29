import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElectricityService } from '../core/services/electricity.service';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html'
})

export class AppareilComponent implements OnInit {
    @Input()
    public led: boolean;

    @Output() public ledChange: EventEmitter<boolean>;

    public switch: boolean;
    public electricity: boolean;

    constructor(
        private elec: ElectricityService
    ) {
        this.ledChange = new EventEmitter();
        this.electricity = false;
    }

    public ngOnInit(): void {
        setTimeout(() => {
            this.electricity = this.elec.getElectricity();
            console.log('J\'ai de l\'électricité !');
        }, 3000);
    }

    public onSwitch(): void {
        this.led = !this.led;
        this.ledChange.emit(this.led);
    }
}
