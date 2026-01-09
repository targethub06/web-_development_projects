
function convertcurrency() {
    let fromcurr = document.getElementById("from").value;
    let tocurr = document.getElementById("to").value;
    let amt = Number(document.getElementById("text-input").value);
    let result = document.getElementById("result-area");
    if (fromcurr === 'USD' && tocurr === 'Rupee') {
        amt = amt * 90.32;
        result.innerHTML = `${amt.toFixed(2)} Rupees`;
    }
    else if (fromcurr === 'USD' && tocurr === 'Euro') {
        amt = amt * 0.94;
        result.innerHTML = `${amt.toFixed(2)} Euro`;
    }
    else if (fromcurr === 'Rupee' && tocurr === 'USD') {
        amt = amt * 0.011;
        result.innerHTML = `${amt.toFixed(2)} USD`;
    }
    else if (fromcurr === 'Rupee' && tocurr === 'Euro') {
        amt = amt * 0.010;
        result.innerHTML = `${amt.toFixed(2)} Euro`;
    }
    else if (fromcurr === 'Euro' && tocurr === 'USD') {
        amt = amt * 1.06;
        result.innerHTML = `${amt.toFixed(2)} USD`;
    }
    else if (fromcurr === 'Euro' && tocurr === 'Rupee') {
        amt = amt * 95.74;
        result.innerHTML = `${amt.toFixed(2)} Rupees`;
    }
    else {
        result.innerHTML = `Invalid Conversion`;
    }

}