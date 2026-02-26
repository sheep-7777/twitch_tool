
const targetNode = document.querySelectorAll('.chat-scrollable-area__message-container')[0];
const observer = new MutationObserver((mutationsList, observer) => {
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
            const elements = document.querySelectorAll('.chat-image');
elements.forEach(element => {
    element.remove();
});
            const elements2 = document.querySelectorAll('.chat-badge');
elements2.forEach(element => {
    element.remove();
});
        }
    }
});
const config = { childList: true, subtree: true, characterData: true };
observer.observe(targetNode, config);
 const elements3 = document.querySelectorAll('.chat-image');
elements3.forEach(element => {
    element.remove();
});

            const elements4 = document.querySelectorAll('.chat-badge');

elements4.forEach(element => {
    element.remove();
});
