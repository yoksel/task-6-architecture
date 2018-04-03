import './styles.css';

import {Dispatcher} from './myFlux/Dispatcher';
import {Log} from './myFlux/Log';

import {MyStore} from './components/MyStore';
import {Controller} from './components/Controller';

const dispatcher = new Dispatcher();
const store = new MyStore(dispatcher);
const controller = new Controller(dispatcher, store);

const logsElem = document.querySelector('.stream__log');
const logReverseBtn = document.querySelector('.stream__btn-reverse');
let isLogsReversed = false;
const log = new Log([dispatcher, controller, store], logsElem);

const input = document.querySelector('.view-stub__input');
const applyBtn = document.querySelector('.view-stub__btn--apply');
const allBtn = document.querySelector('.view-stub__btn--all');
const deleteBtn = document.querySelector('.view-stub__btn--delete');

const responseElem = document.querySelector('.view-stub__response');
const resultElem = document.querySelector('.stream__result');
const resultElemContainer = document.querySelector('.stream__item--result');
let isResultsShown = false;

applyBtn.disabled = !input.value;

// ------------------------------

input.addEventListener('input', () => {
    applyBtn.disabled = !input.value;
});

applyBtn.addEventListener('click', () => {
    const text = input.value;
    controller.addItem(text);
    input.value = '';
    applyBtn.disabled = !input.value;
});

allBtn.addEventListener('click', () => {

    if (isResultsShown) {
        hideItems();
        allBtn.innerHTML = allBtn.dataset.textShow;
    } else {
        controller.getItems();
        allBtn.innerHTML = allBtn.dataset.textHide;
    }

    isResultsShown = !isResultsShown;
});

deleteBtn.addEventListener('click', () => {
    controller.deleteItems();
});

logReverseBtn.addEventListener('click', () => {
    logsElem.classList.toggle('log--reverse');

    if (isLogsReversed) {
        logReverseBtn.innerHTML = logReverseBtn.dataset.textNew;
    } else {
        logReverseBtn.innerHTML = logReverseBtn.dataset.textOld;
    }

    isLogsReversed = !isLogsReversed;
});

// ------------------------------

store.subscribe((response) => {
    responseElem.innerHTML = response.message;

    if (response.event === 'GET_ITEMS') {
        showItems(response.data);
    } else if (isResultsShown) {
        updateItems(response.data);
    }
});

// ------------------------------

function showItems(data) {
    resultElemContainer.classList.add('stream__item--result-expanded');

    updateItems(data);
}

// ------------------------------

function updateItems(data) {
    if (data.length > 0) {
        resultElem.innerHTML = data.join('<br>');
    } else {
        resultElem.innerHTML = '<i>(Пусто)</i>';
    }
}

// ------------------------------

function hideItems() {
    resultElemContainer.classList.remove('stream__item--result-expanded');
}
