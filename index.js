const actions = document.getElementById('actions');
const output = document.getElementById('output');

const render = drawing => {
  output.innerHTML = drawing;
};

// const clear = () => {output.innerHTML = '';
// };

// triangle

const triangle = () => {
    let drawing = '';
   for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        drawing += '*';
    }
     drawing += '*<br />';
 }
   render(drawing);
};

// piramid

const piramid = () => {
   let drawing = '';
   for (let i = 0; i < 10; i++) {
    // tarpai
    for(let j = 0; j < 10 - i; j++){
        drawing +='&nbsp;';
    }
    // zvaigzdutes
    for (let k = 0; k < i * 2 + 1; k++) {
        drawing += '*';
    }
     drawing += '*<br />';
 }
   render(drawing);
};

const reversePiramid = () => {
   let drawing = '';
   for (let i = 10; i >= 0; i--) {
    // tarpai
    for(let j = 0; j < 10 - i; j++){
        drawing +='&nbsp;';
    }
    // zvaigzdutes
    for (let k = 0; k < i * 2 + 1; k++) {
        drawing += '*';
    }
     drawing += '*<br />';
 }
   render(drawing);
};



actions.addEventListener('click', event => {
    // if(event.target.tagName === 'button') {
    const action = event.target.id;
    switch (action) {
        case 'triangle':
        triangle();
        break;
        case 'piramid':
        piramid();
        break;
        case 'reverse-piramid':
        reversePiramid();
        break;
        case 'clear':
        render('');
        break;
        default:
        render('');

    }
   // }
});

   
