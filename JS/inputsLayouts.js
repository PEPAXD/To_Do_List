document.querySelector('input[name="email"]').addEventListener('input', function(event) {

    var label = document.querySelector('label[for="email"]');
    if (event.target.value) {
        label.classList.add('has-text');
    } else {
        label.classList.remove('has-text');
    }
});

document.querySelector('input[name="text"]').addEventListener('input', function(event) {

    var label = document.querySelector('label[for="username"]');
    if (event.target.value) {
        label.classList.add('has-text');
    } else {
        label.classList.remove('has-text');
    }
});