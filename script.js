function appendtoinput(value) {
  document.getElementById("result").value += value;
}
function clearinput() {
  document.getElementById("result").value = "";
}
function calculateResult(){
  document.getElementById("result").value = eval(document.getElementById("result").value);
}
function del(){
  const current=
    document.getElementById("result").value;

  const update=
    current.slice(0,-1);
  document.getElementById('result').value=update;
}
function posneg(){
  const current=
    document.getElementById("result").value;
  const update=
    current*(-1);
  document.getElementById('result').value=update;
  }