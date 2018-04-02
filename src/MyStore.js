import {Store} from './myFlux/Store';

class MyStore extends Store {

    constructor(dispatcher) {
        super(dispatcher);
        this.items = [];
        this.actions = {
            'ADD_ITEM': this.addItem,
            'GET_ITEMS': this.getItems,
            'DELETE_ITEMS': this.deleteItems
        };
    }

    onDispatch(payload) {
        const func = this.actions[payload.event].bind(this);
        func(payload.data);
    }

    addItem(item) {
        this.items.push(item);
        this.response.message = `📥 Текст «${item}» добавлен в хранилище`;
        this.changed = true;
    }

    getItems() {
        if (this.changed){
            this.response.data = this.items;
            this.response.message = '📦 Получено содержимое хранилища';
        }
        else {
            this.response.message = '📦 Cодержимое хранилища не менялось';
        }

        this.changed = false;
    }

    deleteItems() {
        this.items = [];
        this.response.data = this.items;
        this.response.message = '🗑 Cодержимое хранилища удалено';
        this.changed = true;
    }
}


export {MyStore};
