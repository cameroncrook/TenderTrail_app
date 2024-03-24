import PlayItem from "./PlayItem.js";

export default class GameBoard {
    rooms: number[];
    places: PlayItem[];
    people: PlayItem[];
    events: PlayItem[];

    constructor(rooms: number[], places: PlayItem[], people: PlayItem[], events: PlayItem[]) {
        this.rooms = rooms,
        this.places = places,
        this.people = people,
        this.events = events
    }

    generateBoard(): void {

        for(let i: number = 0; i < 576; i++) {
            const tileElement: HTMLDivElement = document.createElement('div');
            tileElement.className = `tile-object`;
            tileElement.setAttribute('data-id', i.toString());
            
            const parentElement: Element | null = document.getElementById('game-board');
            parentElement?.appendChild(tileElement);
        }
        
        return;
    }
}