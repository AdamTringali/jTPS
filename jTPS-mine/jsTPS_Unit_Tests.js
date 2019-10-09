// To run this file run "node js_TPS_Unit_Test.js"

var jsTPS = require('./jsTPS.js')
var AddToNum_Transaction = require('./AddToNum_Transaction.js')
var AndMask_Transaction = require('./AndMask_Transaction')
//var OrMask_Transaction = require('./OrMask_Transaction')
var Num = require('./Num.js')
var Assert = require('assert');


/**
 * jTPS_Unit_Tests.java
 * 
 * This file provides a test bed for the jTPS framework.
 * 
 * @author McKilla Gorilla
 * @version 2.0
 */
class jsTPS_Unit_Tests {
    /**
     * This JUnit test is for testing the adding of transactions.
     */
    //@Test
    testAdd() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.equal(0, num.getNum());

        //console.log(tps.toString());
        
        // ADD 5 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 5));
       
        Assert.equal(5, num.getNum());
        Assert.equal(1, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(1, tps.getUndoSize());
        
        // ADD 10 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        Assert.equal(15, num.getNum());
        Assert.equal(2, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(2, tps.getUndoSize());
        
        // ADD 15 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
    }
    
    /**
     * 
     */
    //@Test
    testAndMask() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.equal(0, num.getNum());

        // ADD 5 TRANSACTION
        tps.addTransaction(new AddToNum_Transaction(num, 12));
        tps.addTransaction(new AndMask_Transaction(num, num.getNum(), 4));
        Assert.equal(4, num.getNum());
        Assert.equal(2, tps.getSize());
        
        tps.undoTransaction();
        Assert.equal(12, num.getNum());
        Assert.equal(2, tps.getSize());
        Assert.equal(1, tps.getRedoSize());
        Assert.equal(1, tps.getUndoSize());

    }
    
    testOrMask() {
        
    }

    /**
     * This JUnit test is for testing the undoing of transactions.
     */
    //@Test
    testUndo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.equal(num.getNum(), 0);
        Assert(!tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert(tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        Assert.equal(35, num.getNum());
        Assert(tps.hasTransactionToUndo());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
        
        // UNDO A TRANSACTION
        tps.undoTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(tps.hasTransactionToRedo());
        Assert.equal(15, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(1, tps.getRedoSize());
        Assert.equal(2, tps.getUndoSize());
        
        // UNDO ANOTHER
        tps.undoTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(tps.hasTransactionToRedo());
        Assert.equal(5, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(2, tps.getRedoSize());
        Assert.equal(1, tps.getUndoSize());
        
        // AND ANOTHER
        tps.undoTransaction();
        Assert(!tps.hasTransactionToUndo());
        Assert(tps.hasTransactionToRedo());
        Assert.equal(0, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(3, tps.getRedoSize());
        Assert.equal(0, tps.getUndoSize());
        
        // WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING
        tps.undoTransaction();
        Assert(!tps.hasTransactionToUndo());
        Assert(tps.hasTransactionToRedo());
        Assert.equal(0, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(3, tps.getRedoSize());
        Assert.equal(0, tps.getUndoSize());
    }
    
    /**
     * This JUnit test is for testing the redoing of transactions.
     */
    //@Test
    testRedo() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.equal(num.getNum(), 0);
        
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert(tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
        
        // UNDO A TRANSACTION AND THEN REDO IT
        tps.undoTransaction();
        tps.doTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
        
        // UNDO TWO TRANSACTIONS AND THEN REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
        
        // UNDO ALL THREE TRANSACTIONS AND REDO THEM
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
        
        // UNDO THREE TRANSACTIONS AND REDO TWO
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(tps.hasTransactionToRedo());
        Assert.equal(15, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(1, tps.getRedoSize());
        Assert.equal(2, tps.getUndoSize());
        
        // UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH
        // SHOULD NOT PRODUCE AN ERROR BUT THE LAST
        // REDO SHOULD DO NOTHING
        tps.undoTransaction();
        tps.undoTransaction();
        tps.undoTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        tps.doTransaction();
        Assert(tps.hasTransactionToUndo());
        Assert(!tps.hasTransactionToRedo());
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
    }    

    /**
     * This JUnit test is for testing clearing of transactions.
     */
    //@Test
    testClear() {
        // WE'LL JUST USE A SIMPLE NUM FOR TESTING
        let tps = new jsTPS();
        let num = new Num();
        Assert.equal(num.getNum(), 0);
        
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.equal(35, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
                
        // CLEAR ALL THE TRANSACTIONS
        tps.clearAllTransactions();
        Assert.equal(35, num.getNum());
        Assert.equal(0, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(0, tps.getUndoSize());
        
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.equal(70, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
                
        // CLEAR THEM ALL OUT AGAIN
        tps.clearAllTransactions();
        Assert.equal(70, num.getNum());
        Assert.equal(0, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(0, tps.getUndoSize());
        
        // ADD 3 TRANSACTIONS (5, 10, and 15)
        tps.addTransaction(new AddToNum_Transaction(num, 5));
        tps.addTransaction(new AddToNum_Transaction(num, 10));
        tps.addTransaction(new AddToNum_Transaction(num, 20));
        Assert.equal(105, num.getNum());
        Assert.equal(3, tps.getSize());
        Assert.equal(0, tps.getRedoSize());
        Assert.equal(3, tps.getUndoSize());
    }
}

let test = new jsTPS_Unit_Tests();
test.testAdd();
test.testAndMask();
test.testUndo();
test.testRedo();
test.testClear();
