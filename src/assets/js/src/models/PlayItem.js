export default class PlayItem {
    constructor(name, description, type) {
        this.name = name,
            this.description = description,
            this.type = type;
    }
    generateCard(hidden = false) {
        let hiddenHtml = '';
        if (hidden) {
            hiddenHtml = '<div class="card-cover"></div>';
        }
        const html = `
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
