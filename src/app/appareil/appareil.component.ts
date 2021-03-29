import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-appareil',
    templateUrl: './appareil.component.html'
})

export class AppareilComponent {
    @Input()
    public electricity: boolean;
    @Input()
    public led: boolean;

    @Output() public ledChange: EventEmitter<boolean>;

    public switch: boolean;

    constructor() {
        this.ledChange = new EventEmitter();
    }

    public onSwitch(): void {
        this.led = !this.led;
        this.ledChange.emit(this.led);
    }
}
