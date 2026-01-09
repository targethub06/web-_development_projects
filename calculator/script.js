let resultarea = document.getElementById("result-area");
function numberClick(num) {
    resultarea.innerHTML += num;
}

function operatorClick(op) {
    resultarea.innerHTML += " " + op + " ";
}

function clearResult() {
    resultarea.innerHTML = "";
}

function calcresult() {
    try {
        resultarea.innerHTML = eval(resultarea.innerHTML);
    } catch {
        resultarea.innerHTML = "Error";
    }
}