import {Observer} from './Observer';

class Store extends Observer {

    constructor(dispatcher) {
        super();
        this.dispatcher = dispatcher;
        this.dispatchToken = dispatcher.register(payload => {
            this.invokeOnDispatch(payload);
        });
        this.changed = false;
        this.response = {};
    }

    hasChanged() {
        if (!this.dispatcher.isDispatching) {
            console.log('Команда должна выпполняться только во время обработки запроса');
            return;
        }

        return this.changed;
    }

    invokeOnDispatch(payload) {
        this.changed = false;
        this.response.event = 'SERVER_GETS_DATA',
        this.response.message = '⤵️ Хранилище получило запрос';

        this.broadcast(this.response);

        this.onDispatch(payload);

        if (this.changed) {
            this.emitChange(payload);
        }
    }

    onDispatch(payload) {
        console.log('Эта функция должна быть переопределена в расширении класса');
        return false;
    }

    emitChange(payload) {
        if (!this.dispatcher.isDispatching) {
            console.log('Команда должна выпполняться только во время обработки запроса');
            return;
        }

        this.response.event = payload.event;
        this.broadcast(this.response);
        this.changed = true;
    }
}

export {Store};
