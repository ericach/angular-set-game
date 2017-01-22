"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SetCardComponent = (function () {
    function SetCardComponent() {
        this.cardSelected = new core_1.EventEmitter();
        this.cardDeselected = new core_1.EventEmitter();
        this.countInternal = [];
        this.selected = false;
    }
    SetCardComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.count; i++) {
            this.countInternal.push(i);
        }
    };
    SetCardComponent.prototype.toggleCardSelection = function () {
        this.selected = !this.selected;
        if (this.selected) {
            this.cardSelected.emit({
                value: { color: this.color, count: this.count, shape: this.shape, fill: this.fill }
            });
        }
        else {
            this.cardDeselected.emit({
                value: { color: this.color, count: this.count, shape: this.shape, fill: this.fill }
            });
        }
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SetCardComponent.prototype, "color", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SetCardComponent.prototype, "count", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SetCardComponent.prototype, "shape", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SetCardComponent.prototype, "fill", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SetCardComponent.prototype, "cardSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SetCardComponent.prototype, "cardDeselected", void 0);
    SetCardComponent = __decorate([
        core_1.Component({
            selector: 'as-set-card',
            templateUrl: 'app/setgame/setcard.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SetCardComponent);
    return SetCardComponent;
}());
exports.SetCardComponent = SetCardComponent;

//# sourceMappingURL=setcard.component.js.map
