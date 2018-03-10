export default {
    auth: () => {
        return fetch('https://devchat3.notifyvisitors.com/brand/', {
            credentials: "same-origin"
        }).then(res => res.json());
    }
}