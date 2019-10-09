
 let numb = new Num();
 let jsTpss = new jsTPS();

 function add5Button() {
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 5));
    document.getElementById("getNum5").innerHTML = document.getElementById("getNum5").innerHTML + " = " + numb.getNum();
    document.getElementById("getSize5").innerHTML =  document.getElementById("getSize5").innerHTML + " = " + jsTpss.getSize();
    document.getElementById("getRedoSize5").innerHTML = document.getElementById("getRedoSize5").innerHTML + " = " + jsTpss.getRedoSize();
    document.getElementById("getUndoSize5").innerHTML =  document.getElementById("getUndoSize5").innerHTML + " = " + jsTpss.getUndoSize();
}

function add10Button() {
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 10));
    document.getElementById("getNum10").innerHTML = document.getElementById("getNum10").innerHTML + " = " + numb.getNum();
    document.getElementById("getSize10").innerHTML =  document.getElementById("getSize10").innerHTML + " = " + jsTpss.getSize();
    document.getElementById("getRedoSize10").innerHTML = document.getElementById("getRedoSize10").innerHTML + " = " + jsTpss.getRedoSize();
    document.getElementById("getUndoSize10").innerHTML =  document.getElementById("getUndoSize10").innerHTML + " = " + jsTpss.getUndoSize();
}

function add20Button() {
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 20));
    document.getElementById("getNum20").innerHTML = document.getElementById("getNum20").innerHTML + " = " + numb.getNum();
    document.getElementById("getSize20").innerHTML =  document.getElementById("getSize20").innerHTML + " = " + jsTpss.getSize();
    document.getElementById("getRedoSize20").innerHTML = document.getElementById("getRedoSize20").innerHTML + " = " + jsTpss.getRedoSize();
    document.getElementById("getUndoSize20").innerHTML =  document.getElementById("getUndoSize20").innerHTML + " = " + jsTpss.getUndoSize();
}

function add12Button() {
    jsTpss = new jsTPS();
    numb = new Num();
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 12));
    jsTpss.addTransaction(new AndMask_Transaction(numb, numb.getNum(), 4));
    document.getElementById("getNum12").innerHTML = document.getElementById("getNum12").innerHTML + " = " + numb.getNum();
    document.getElementById("getSize12").innerHTML = document.getElementById("getSize12").innerHTML + " = " + jsTpss.getSize();

    jsTpss.undoTransaction();
    document.getElementById("getNum12undo").innerHTML +=  " = " + numb.getNum();
    document.getElementById("getSize12undo").innerHTML +=  " = " + jsTpss.getSize();
    document.getElementById("getRedoSize12undo").innerHTML +=  " = " + jsTpss.getRedoSize();
    document.getElementById("getUndoSize12undo").innerHTML +=  " = " + jsTpss.getUndoSize();
}

function add3Button(){
    jsTpss = new jsTPS();
    numb = new Num();
    document.getElementById("getNum3").innerHTML +=  " = " + numb.getNum();
    document.getElementById("hasTransactionUndo").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("hasTransactionRedo").innerHTML +=  " = " + jsTpss.hasTransactionToRedo();

    jsTpss.addTransaction(new AddToNum_Transaction(numb, 5));
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 10));
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 20));
    document.getElementById("num3").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("num4").innerHTML +=  " = " + jsTpss.hasTransactionToRedo();
    document.getElementById("num5").innerHTML +=  " = " + numb.getNum();
    document.getElementById("num6").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("num7").innerHTML +=  " = " + jsTpss.getSize();
    document.getElementById("num8").innerHTML +=  " = " + jsTpss.getRedoSize();
    document.getElementById("num9").innerHTML +=  " = " + jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num10").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("num11").innerHTML +=  " = " + jsTpss.hasTransactionToRedo();
    document.getElementById("num12").innerHTML +=  " = " + numb.getNum();
    document.getElementById("num13").innerHTML +=  " = " + jsTpss.getSize();
    document.getElementById("num14").innerHTML +=  " = " + jsTpss.getRedoSize();
    document.getElementById("num15").innerHTML +=  " = " + jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num16").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("num17").innerHTML +=  " = " + jsTpss.hasTransactionToRedo();
    document.getElementById("num18").innerHTML +=  " = " + numb.getNum();
    document.getElementById("num19").innerHTML +=  " = " + jsTpss.getSize();
    document.getElementById("num20").innerHTML +=  " = " + jsTpss.getRedoSize();
    document.getElementById("num21").innerHTML +=  " = " + jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num22").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("num23").innerHTML +=  " = " + jsTpss.hasTransactionToRedo();
    document.getElementById("num24").innerHTML +=  " = " + numb.getNum();
    document.getElementById("num25").innerHTML +=  " = " + jsTpss.getSize();
    document.getElementById("num26").innerHTML +=  " = " + jsTpss.getRedoSize();
    document.getElementById("num27").innerHTML +=  " = " + jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num28").innerHTML +=  " = " + jsTpss.hasTransactionToUndo();
    document.getElementById("num29").innerHTML +=  " = " + jsTpss.hasTransactionToRedo();
    document.getElementById("num30").innerHTML +=  " = " + numb.getNum();
    document.getElementById("num31").innerHTML +=  " = " + jsTpss.getSize();
    document.getElementById("num32").innerHTML +=  " = " + jsTpss.getRedoSize();
    document.getElementById("num33").innerHTML +=  " = " + jsTpss.getUndoSize();

}   

