$( document ).ready(function() {
    checkcookie();
});

function checkcookie() {
    if (localStorage.getItem("popup") === null) {
        $('#button').click();
        localStorage.setItem('popup', 'true');
    } else {
        return;
    }
}