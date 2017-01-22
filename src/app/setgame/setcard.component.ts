import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'as-set-card',
    templateUrl: 'app/setgame/setcard.html'
})
export class SetCardComponent implements OnInit {
    @Input() color: string;
    @Input() count: number;
    @Input() shape: string;
    @Input() fill: string;

    @Output() cardSelected = new EventEmitter();
    @Output() cardDeselected = new EventEmitter();

    private countInternal: Array<number> = [];
    private selected: boolean = false;

    ngOnInit() {
        for (let i = 0; i < this.count; i++) {
            this.countInternal.push(i);
        }
    }

    toggleCardSelection() {
        this.selected = !this.selected;

        if (this.selected) {
            this.cardSelected.emit({
                value: {color: this.color, count: this.count, shape: this.shape, fill: this.fill}
            });
        } else {
            this.cardDeselected.emit({
                value: {color: this.color, count: this.count, shape: this.shape, fill: this.fill}
            });
        }
    };
}
