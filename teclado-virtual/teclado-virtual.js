function insert (num) {
    document.form.textview.value = document.form.textview.value + num;
}
function apagar (){
    var apaga = document.form.textview.value

    document.form.textview.value = apaga.substring(0, apaga.length-1)
}
function deletar (){
    document.form.textview.value = ""
}
function espaco (){
    document.form.textview.value = document.form.textview.value + " "

}