import {Observer} from '../myFlux/Observer';

class Controller extends Observer {

    constructor(dispatcher) {
        super();

        this.dispatcher = dispatcher;
        this.response = {};
    }

    sendRequest(data) {
        this.response.event = 'CONTROLLER_SEND_TO_SERVER';
        this.response.message = `➡️ Контроллер получил событие ${data.event} и передаёт запрос диспетчеру`;
        this.broadcast(this.response);

        this.dispatcher.dispatch({
            event: data.event,
            data: data.content
        });
    }

    addItem(data) {
        this.sendRequest({
            event: 'ADD_ITEM',
            content: data
        });
    }

    getItems() {
        this.sendRequest({
            event: 'GET_ITEMS'
        });
    }

    deleteItems() {
        this.sendRequest({
            event: 'DELETE_ITEMS'
        });
    }
}

export {Controller};
