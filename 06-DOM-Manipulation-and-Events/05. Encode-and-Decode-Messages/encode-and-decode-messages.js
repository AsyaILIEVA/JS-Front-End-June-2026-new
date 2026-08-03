document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const buttons = document.querySelectorAll('button');
    const textareas = document.querySelectorAll('textarea');

    const sender = textareas[0];
    const receiver = textareas[1];

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {
        const encoded = sender.value
            .split('')
            .map(ch => String.fromCharCode(ch.charCodeAt(0) + 1))
            .join('');

        receiver.value = encoded;
        sender.value = '';
    }

    function decode() {
        const decoded = receiver.value
            .split('')
            .map(ch => String.fromCharCode(ch.charCodeAt(0) - 1))
            .join('');

        receiver.value = decoded;
    }
}