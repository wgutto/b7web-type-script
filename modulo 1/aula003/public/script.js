var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var button = document.getElementById('button');
var res = document.getElementById('res');
function somar(n1, n2) {
    return n1 + n2;
}
button.addEventListener('click', function () {
    res.innerHTML = somar(Number(n1.value), Number(n2.value)).toString();
});
