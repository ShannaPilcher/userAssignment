class User {
    constructor(username, emailAddress){
        this.name = username;
        this.email = emailAddress;
        this.accountBalance = 0;
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

const shanna = new User("Shanna Pilcher", "shanna@user.com");
const ty = new User("Ty Pilcher", "ty@user.com");
const lex = new User("Lex Pilcher", "lex@user.com");
console.log(shanna.name);
console.log(ty.name);
console.log(lex.name);
