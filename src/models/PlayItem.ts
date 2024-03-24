export default class PlayItem {
    name: string;
    description: string;
    type: string;

    constructor(name: string, description: string, type: string) {
        this.name = name,
        this.description = description,
        this.type = type
    }

    generateCard(hidden=false): string {
        let hiddenHtml: string = '';

        if (hidden) {
            hiddenHtml = '<div class="card-cover"></div>';
        }

        const html: string = `
        <div class="card">
            ${hiddenHtml}
            <h6>${this.type}</h6>
            <hr>
            <div>
                <img src="">
                <h4>${this.name}</h4>
                <p>${this.description}</p>
            </div>
        </div>
        `;

        return html;
    }
}