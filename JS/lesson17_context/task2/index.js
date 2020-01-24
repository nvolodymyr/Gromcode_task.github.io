export let callbackPrompt = {
    message: 'Tell me your number',
    showPrompt() {
        let infoFromUser = prompt(this.message);
        console.log(infoFromUser);
    },
    showDeferredPrompt(time) {
        setTimeout(this.showPromt.bind(this), time);
    }
}