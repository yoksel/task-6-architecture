import {Observer} from './Observer';

class Dispatcher extends Observer {

    constructor() {
        super();

        this.lastId = 1;
        this.isDispatching = false;
        this.isHandled = {};
        this.isPending = {};
        this.pendingPayload = {};
        this.callbacks = {};
        this.response = {};
    }

    register(callback) {
        const id = `disp-${this.lastId}`;
        this.callbacks[id] = callback;
        this.lastId++;
        return id;
    }

    unRegister(id) {
        delete this.callbacks[id];
    }

    dispatch(payload) {
        let id;

        if (this.isDispatching) {
            console.log('Запрос не может быть выполнен во время обработки другого запроса');
            return false;
        }

        this.startDispatching(payload);

        this.response.event = 'DISPATCHER_DISPATCH';
        this.response.message = '➡️ Диспетчер получил запрос и передаёт его хранилищам';
        this.broadcast(this.response);

        for (id in this.callbacks) {
            if (this.isPending[id]) {
                continue;
            }

            this.pendingPayoad = payload;
            this.invokeCallback(id);
        }

        this.stopDispatching();
    }

    invokeCallback(id) {
        this.isPending[id] = true;
        this.callbacks[id](this.pendingPayoad);
        this.isHandled[id] = true;
    }

    isDispatching() {
        return this.isDispatching;
    }

    startDispatching(payload) {
        let id;
        for (id in this.callbacks) {
            this.isPending[id] = false;
            this.isHandled[id] = false;
        }
        this.pendingPayload = payload;
        this.isDispatching = true;
    }

    stopDispatching() {
        delete this.pendingPayload;
        this.isDispatching = false;
    }
}

export {Dispatcher};
