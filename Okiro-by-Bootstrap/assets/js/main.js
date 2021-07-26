function openDropdown() {
    var testElement = document.getElementById('header--dropdown');
    if (testElement.classList.contains('open')) {
        console.log('ok');
        testElement.classList.remove('open')
    } else {
        console.log('not ok');
        testElement.classList.add('open')
    }

}