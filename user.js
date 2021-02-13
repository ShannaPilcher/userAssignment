class User {
    constructor(username, emailAddress){
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance += amount;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
    }
    displayBalance(){
        console.log(this.accountBalance);
    }
    transferMoney(otherUser, amount){
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        console.log(this.accountBalance);
        console.log(otherUser.accountBalance);
    }
}


