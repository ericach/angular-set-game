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
var http_1 = require('@angular/http');
var _ = require('lodash');
;
;
var SetGameComponent = (function () {
    function SetGameComponent(http) {
        this.http = http;
        this.cardDeck = [];
        this.board = [];
        this.selectedCards = [];
        this.completedCount = 0;
        this._loadCards();
    }
    ;
    SetGameComponent.prototype.newCardSelected = function (event) {
        this.selectedCards.push(event.value);
        if (this.selectedCards.length === 3) {
            var properSet = this.checkSet();
            if (properSet) {
                this.completeSet();
            }
        }
    };
    ;
    SetGameComponent.prototype.cardDeselected = function (event) {
        _.remove(this.selectedCards, function (i) {
            return _.isEqual(i, event.value);
        });
    };
    SetGameComponent.prototype._allEqual = function (values) {
        if (values[0] === values[1] && values[1] === values[2] && values[0] === values[2]) {
            return true;
        }
        return false;
    };
    ;
    SetGameComponent.prototype._allUnequal = function (values) {
        if (values[0] !== values[1] && values[1] !== values[2] && values[0] !== values[2]) {
            return true;
        }
        return false;
    };
    ;
    SetGameComponent.prototype.checkSet = function () {
        // Color
        var colors = _.map(this.selectedCards, 'color');
        if (!(this._allEqual(colors) || this._allUnequal(colors))) {
            return false;
        }
        // Shape
        var shapes = _.map(this.selectedCards, 'shape');
        if (!(this._allEqual(shapes) || this._allUnequal(shapes))) {
            return false;
        }
        // Fill
        var fills = _.map(this.selectedCards, 'fill');
        if (!(this._allEqual(fills) || this._allUnequal(fills))) {
            return false;
        }
        // Count
        var counts = _.map(this.selectedCards, 'count');
        if (!(this._allEqual(counts) || this._allUnequal(counts))) {
            return false;
        }
        return true;
    };
    ;
    SetGameComponent.prototype.completeSet = function () {
        this.completedCount++;
        this._removeSetFromBoard();
        this.selectedCards = [];
        this._addCardsToBoard(3);
    };
    ;
    SetGameComponent.prototype._removeSetFromBoard = function () {
        var _this = this;
        _.forEach(this.selectedCards, function (card) {
            _.remove(_this.board, function (c) {
                return _.isEqual(card, c);
            });
        });
    };
    ;
    SetGameComponent.prototype.shuffle = function () {
        this.cardDeck = this.cardDeck.concat(this.board);
        this.selectedCards = [];
        this.board = [];
        this._addCardsToBoard(12);
    };
    ;
    SetGameComponent.prototype.reset = function () {
        this.selectedCards = [];
        this.board = [];
        this.completedCount = 0;
        this._loadCards();
    };
    ;
    SetGameComponent.prototype._loadCards = function () {
        var _this = this;
        this.http.get('src/app/setgame/data/cards.json').subscribe(function (res) {
            _this.cardDeck = res.json();
            _this._addCardsToBoard(12);
        });
    };
    ;
    SetGameComponent.prototype._addCardsToBoard = function (count) {
        for (var i = 0; i < count; i++) {
            var randomIndex = this._getRandomIndex(0, this.cardDeck.length);
            var card = this.cardDeck[randomIndex];
            this.cardDeck.splice(randomIndex, 1);
            this.board.push(card);
        }
    };
    ;
    SetGameComponent.prototype._getRandomIndex = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    ;
    SetGameComponent = __decorate([
        core_1.Component({
            selector: 'as-set-game',
            templateUrl: 'app/setgame/setgame.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SetGameComponent);
    return SetGameComponent;
}());
exports.SetGameComponent = SetGameComponent;

//# sourceMappingURL=setgame.component.js.map
