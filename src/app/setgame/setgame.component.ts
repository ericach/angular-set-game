import { Component } from '@angular/core';
import { Http } from '@angular/http';
import * as _ from 'lodash';

interface CardObject {
    color: string;
    shape: string;
    count: number;
    fill: string;
};

interface EventObject {
    value: CardObject;
};

@Component({
    selector: 'as-set-game',
    templateUrl: 'app/setgame/setgame.html'
})
export class SetGameComponent {

    private cardDeck: Array<CardObject> = [];
    private board: Array<CardObject> = [];
    private selectedCards: Array<CardObject> = [];
    private completedCount: number = 0;

    constructor(private http: Http) {
        this._loadCards();
    };

    newCardSelected(event: EventObject) {
        this.selectedCards.push(event.value);

        if (this.selectedCards.length === 3) {
            let properSet = this.checkSet();
            if (properSet) {
                this.completeSet();
            }
        }
    };

    cardDeselected(event: EventObject) {
        _.remove(this.selectedCards, function(i) {
            return _.isEqual(i, event.value);
        });
    }

    _allEqual(values) {
        if (values[0] === values[1] && values[1] === values[2] && values[0] === values[2]) {
            return true;
        }
        return false;
    };

    _allUnequal(values) {
        if (values[0] !== values[1] && values[1] !== values[2] && values[0] !== values[2]) {
            return true;
        }
        return false;
    };

    checkSet() {
        // Color
        let colors = _.map(this.selectedCards, 'color');
        if (!(this._allEqual(colors) || this._allUnequal(colors))) {
            return false;
        }

        // Shape
        let shapes = _.map(this.selectedCards, 'shape');
        if (!(this._allEqual(shapes) || this._allUnequal(shapes))) {
            return false;
        }

        // Fill
        let fills = _.map(this.selectedCards, 'fill');
        if (!(this._allEqual(fills) || this._allUnequal(fills))) {
            return false;
        }

        // Count
        let counts = _.map(this.selectedCards, 'count');
        if (!(this._allEqual(counts) || this._allUnequal(counts))) {
            return false;
        }

        return true;
    };

    completeSet() {
        this.completedCount++;
        this._removeSetFromBoard();
        this.selectedCards = [];
        this._addCardsToBoard(3);
    };

    _removeSetFromBoard() {
        _.forEach(this.selectedCards, (card) => {
            _.remove(this.board, function(c) {
                return _.isEqual(card, c);
            });
        });
    };

    shuffle() {
        this.cardDeck = this.cardDeck.concat(this.board);
        this.selectedCards = [];
        this.board = [];
        this._addCardsToBoard(12);
    };

    reset() {
        this.selectedCards = [];
        this.board = [];
        this.completedCount = 0;
        this._loadCards();
    };

    _loadCards() {
        this.http.get('src/app/setgame/data/cards.json').subscribe(res => {
            this.cardDeck = res.json();
            this._addCardsToBoard(12);
        });
    };

    _addCardsToBoard(count: number) {
        for (let i = 0; i < count; i++) {
            let randomIndex = this._getRandomIndex(0, this.cardDeck.length);
            let card = this.cardDeck[randomIndex];
            this.cardDeck.splice(randomIndex, 1);
            this.board.push(card);
        }
    };

    _getRandomIndex(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
}
