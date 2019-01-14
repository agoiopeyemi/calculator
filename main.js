



function getNumOperator(x) {
    document.getElementById("textView").innerHTML += x;
}

function clean() {
    document.getElementById("textView").innerHTML = "";
}

function equal() {
    const exp = document.getElementById('textView').innerHTML 
    if(exp) {
        document.getElementById('textView').innerHTML = eval(exp);
    }
}

