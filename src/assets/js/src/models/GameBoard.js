export default class GameBoard {
    constructor(rooms, places, people, events) {
        this.rooms = rooms,
            this.places = places,
            this.people = people,
            this.events = events;
    }
    generateBoard() {
        for (let i = 0; i < 576; i++) {
            const tileElement = document.createElement('div');
            tileElement.className = `tile-object`;
            tileElement.setAttribute('data-id', i.toString());
            const parentElement = document.getElementById('game-board');
            parentElement?.appendChild(tileElement);
        }
        return;
    }
}
