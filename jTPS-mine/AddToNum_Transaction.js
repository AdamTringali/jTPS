


class AddToNum_Transaction {

     constructor(initNum, initAmountToAdd) {
         this.num = initNum;
         this.amountToAdd = initAmountToAdd;
     }

    doTransaction() {
        var oldNum = this.num.getNum();
        var newNum = oldNum + this.amountToAdd;
        this.num.setNum(newNum);
    }

    undoTransaction() {
        var oldNum = this.num.getNum();
        var newNum = oldNum - this.amountToAdd;
        this.num.setNum(newNum);
    }

    toString() {
        return "Add " + this.amountToAdd;
    }


}