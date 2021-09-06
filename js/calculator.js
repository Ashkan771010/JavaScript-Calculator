var input = document.getElementById("txtInput");
var reset = document.getElementById("reset");
var operator = document.querySelectorAll(".operators button");
var btnOp = document.getElementsByClassName(".btnOp");

function show(objBtn) {
    var num = objBtn.dataset.value;
    input.innerHTML += num;
    // if(num == operator.indexOf("+")) {
    //     btnOp.disabled = true;
    // }
    // console.log(objBtn.dataset.value);
}

function result() {
    var textContent = input.textContent
    // console.log(textContent);
    var final = eval(textContent);
    input.innerHTML = final;
    console.log(final);
}

reset.addEventListener("click", () => {
    input.innerHTML = "";
});