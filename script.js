const keyboard = {
    topRow: 'qwertyuiop[]',
    middleRow: 'asdfghjkl;\'\\',
    bottomRow: 'zxcvbnm,./'
}

const createButton = (content, ...classNames) => {
    const button = document.createElement('button');//создаем кнопку 
    button.classList.add(...classNames);//добавили класс
    button.innerText = content;
    return button;
}

const createRow = () => {
    const row = document.createElement('div');
    row.classList.add('keyboard__row');
    return row;
}

const createKeyboard = (keyboard) => {
    const keyboardElement = document.createElement('div');
    keyboardElement.classList.add('keyboard');

    for (key in keyboard) {
        const keyRow = createRow();

        for (let i = 0; i < keyboard[key].length; i++) {
            const button = createButton(keyboard[key][i], 'keyboard__button');
            keyRow.append(button);
        }

        keyboardElement.append(keyRow);
    }

    const spaceHandler = createRow();
    const spaceButton = createButton('_____________', 'keyboard__button', 'keyboard__button_wide');
    spaceHandler.append(spaceButton);
    keyboardElement.append(spaceHandler);

    document.body.append(keyboardElement);
}

createKeyboard(keyboard);


