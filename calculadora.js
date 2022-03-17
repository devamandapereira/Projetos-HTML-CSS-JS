function insert (num){
    document.form.textview.value = document.form.textview.value + num;
}

function igual () {
    total = document.form.textview.value;

    if (total) {
        document.form.textview.value = eval (total);
    }
}
function limpar (){
    document.form.textview.value = "";
}

function apagar (){
    var limp1 = document.form.textview.value;
    document.form.textview.value = limp1.substring (0, limp1.length -1)
}