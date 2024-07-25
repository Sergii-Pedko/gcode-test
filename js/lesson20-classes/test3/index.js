export class Wallet {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  };

  deposit(amount) {
    this.balance = this.balance + amount;
  };

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`No enough funds`);
      return;
    }else {
      this.balance = this.balance - amount;
    };
  };
};



