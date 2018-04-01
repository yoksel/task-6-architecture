class Log {

    constructor(emitters, elem = null) {
        this.isStarted = false;
        this.elem = elem;

        emitters.forEach(emitter => {
            emitter.subscribe((response) => {
                this.update(response);
            });
        });
    }

    update(response) {
        if (!this.isStarted) {
            if (this.elem) {
                this.elem.innerHTML = '';
            }
            this.isStarted = true;
        }

        this.printToPage(response);

        console.log(response.message);
    }

    printToPage(response) {
        if (this.elem) {
            const event = `<span class="log__event">${response.event}</span>`;
            const newMessage = `<div class="log__message">${response.message} ${event}</div>`;
            this.elem.innerHTML = `${newMessage}${this.elem.innerHTML}`;
        }
    }
}

export {Log};
