
 let numb = new Num();
 let jsTpss = new jsTPS();

 function add5Button() {
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 5));
    document.getElementById("getNum5").value =  numb.getNum();
    document.getElementById("getSize5").value =   jsTpss.getSize();
    document.getElementById("getRedoSize5").value =  jsTpss.getRedoSize();
    document.getElementById("getUndoSize5").value =   jsTpss.getUndoSize();
}

function add10Button() {
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 10));
    document.getElementById("getNum10").value =  numb.getNum();
    document.getElementById("getSize10").value =  jsTpss.getSize();
    document.getElementById("getRedoSize10").value =  jsTpss.getRedoSize();
    document.getElementById("getUndoSize10").value =  jsTpss.getUndoSize();
}

function add20Button() {
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 20));
    document.getElementById("getNum20").value =  numb.getNum();
    document.getElementById("getSize20").value =   jsTpss.getSize();
    document.getElementById("getRedoSize20").value =  jsTpss.getRedoSize();
    document.getElementById("getUndoSize20").value =  jsTpss.getUndoSize();
}

function add12Button() {
    jsTpss = new jsTPS();
    numb = new Num();
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 12));
    jsTpss.addTransaction(new AndMask_Transaction(numb, numb.getNum(), 4));
    document.getElementById("getNum12").value = numb.getNum();
    document.getElementById("getSize12").value = jsTpss.getSize();

    jsTpss.undoTransaction();
    document.getElementById("getNum12undo").value =  numb.getNum();
    document.getElementById("getSize12undo").value =  jsTpss.getSize();
    document.getElementById("getRedoSize12undo").value =  jsTpss.getRedoSize();
    document.getElementById("getUndoSize12undo").value = jsTpss.getUndoSize();
}

function add3Button(){
    jsTpss = new jsTPS();
    numb = new Num();
    document.getElementById("getNum3").value =  numb.getNum();
    document.getElementById("hasTransactionUndo").value = jsTpss.hasTransactionToUndo();
    document.getElementById("hasTransactionRedo").value = jsTpss.hasTransactionToRedo();

    jsTpss.addTransaction(new AddToNum_Transaction(numb, 5));
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 10));
    jsTpss.addTransaction(new AddToNum_Transaction(numb, 20));
    document.getElementById("num3").value =  jsTpss.hasTransactionToUndo();
    document.getElementById("num4").value =  jsTpss.hasTransactionToRedo();
    document.getElementById("num5").value =  numb.getNum();
    document.getElementById("num6").value =  jsTpss.hasTransactionToUndo();
    document.getElementById("num7").value =  jsTpss.getSize();
    document.getElementById("num8").value =  jsTpss.getRedoSize();
    document.getElementById("num9").value =  jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num10").value =  jsTpss.hasTransactionToUndo();
    document.getElementById("num11").value =  jsTpss.hasTransactionToRedo();
    document.getElementById("num12").value =  numb.getNum();
    document.getElementById("num13").value =  jsTpss.getSize();
    document.getElementById("num14").value =  jsTpss.getRedoSize();
    document.getElementById("num15").value =  jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num16").value =  jsTpss.hasTransactionToUndo();
    document.getElementById("num17").value =  jsTpss.hasTransactionToRedo();
    document.getElementById("num18").value =  numb.getNum();
    document.getElementById("num19").value =  jsTpss.getSize();
    document.getElementById("num20").value =  jsTpss.getRedoSize();
    document.getElementById("num21").value =  jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num22").value =  jsTpss.hasTransactionToUndo();
    document.getElementById("num23").value =  jsTpss.hasTransactionToRedo();
    document.getElementById("num24").value =  numb.getNum();
    document.getElementById("num25").value =  jsTpss.getSize();
    document.getElementById("num26").value =  jsTpss.getRedoSize();
    document.getElementById("num27").value =  jsTpss.getUndoSize();

    jsTpss.undoTransaction();
    document.getElementById("num28").value =  jsTpss.hasTransactionToUndo();
    document.getElementById("num29").value =  jsTpss.hasTransactionToRedo();
    document.getElementById("num30").value =  numb.getNum();
    document.getElementById("num31").value =  jsTpss.getSize();
    document.getElementById("num32").value =  jsTpss.getRedoSize();
    document.getElementById("num33").value =  jsTpss.getUndoSize();

}   

