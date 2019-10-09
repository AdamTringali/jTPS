


class AndMask_Transaction {

    constructor(initNum, initInNum, initMask){
        this.num = initNum;
        this.intNum = initInNum;
        this.mask = initMask;
    }

    doTransaction() {
        this.num.andMask(this.mask);
    }

    undoTransaction() {
        this.num.setNum(this.intNum);
    }

    toString() {
        return "And Mask " + this.mask;
    }
}