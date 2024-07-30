document.addEventListener('DOMContentLoaded', function () {
    var btn1v1 = document.getElementById('btn1v1');
    var btn1vPC = document.getElementById('btn1vPC');
    if (btn1v1 instanceof HTMLElement) {
        btn1v1.addEventListener('click', function () {
            window.location.href = 'grid1v1.html';
        });
    }
    else {
        console.error('1v1 button not found');
    }
    if (btn1vPC instanceof HTMLElement) {
        btn1vPC.addEventListener('click', function () {
            window.location.href = 'grid1vpc.html';
        });
    }
    else {
        console.error('1vPC button not found');
    }
});
