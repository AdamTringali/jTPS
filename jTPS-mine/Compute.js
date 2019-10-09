
 let numb = new Num();
 let jsTpss = new jsTPS();

function buttonClick() {
    let amount_textfield = document.getElementById("amount_textfield").value;
    let select_option = document.getElementById("select_menu").value;
    console.log("amount: " + amount_textfield);
    console.log("option: " + select_option);
    if(select_option === "add_transaction")
        jsTpss.addTransaction(new AddToNum_Transaction(numb, parseInt(amount_textfield)))
    else if(select_option === "undo_transaction")
        jsTpss.undoTransaction();
    else if(select_option === "redo_transaction")
        jsTpss.doTransaction();
    else if(select_option === "clear_all_transaction")
        jsTpss.clearAllTransactions();
    else if(select_option === "reset_transaction"){
        jsTpss.clearAllTransactions();
        numb.setNum(0);
    }
    console.log(numb.getNum());
    console.log(jsTpss.mostRecentTransaction);
    document.getElementById("sumtag").innerHTML = numb.getNum();

    document.getElementById("transtag").innerHTML = jsTpss.toString();


}

