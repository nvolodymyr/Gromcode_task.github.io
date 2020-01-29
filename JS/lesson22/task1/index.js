const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removehBtn = document.querySelector('.remove-handlers-btn');


const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');





attachBtn.addEventListener('click', function() {
    divElem.addEventListener('click', logGreyDiv, true);
    divElem.addEventListener('click', logGreenDiv);
    pElem.addEventListener('click', logGreyP, true);
    pElem.addEventListener('click', logGreenP);
    spanElem.addEventListener('click', logGreySpan, true);
    spanElem.addEventListener('click', logGreenSpan);
});
// attachBtn.click();


removehBtn.addEventListener('click', function() {
    divElem.removeEventListener('click', logGreyDiv, true);
    divElem.removeEventListener('click', logGreenDiv);
    pElem.removeEventListener('click', logGreyP, true);
    pElem.removeEventListener('click', logGreenP);
    spanElem.removeEventListener('click', logGreySpan, true);
    spanElem.removeEventListener('click', logGreenSpan);
});
removehBtn.click();


const clearAllEvents = () => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML = '';
}

clearBtn.addEventListener('click', clearAllEvents);
// let allBtn = document.querySelectorAll('.btn');
// allBtn.forEach(elem => elem.click());
spanElem.click();