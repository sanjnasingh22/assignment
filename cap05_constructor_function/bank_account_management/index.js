function BankAccount(accountNumber, name, type, balance, active) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = active;
}

BankAccount.prototype.checBalance = function () {
  console.log(this.balance);
};

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

BankAccount.prototype.isActive = function () {
  return this.active;
};

const sanjanaSingh = new BankAccount(
  45556,
  "Sanjana Singh",
  "Saving",
  30000,
  true
);
sanjanaSingh.checBalance();
sanjanaSingh.deposit(50000);
sanjanaSingh.checBalance();
sanjanaSingh.withdraw(1000);
sanjanaSingh.checBalance();

const rishav = new BankAccount(
  55566,
  "Rishav Raj Singh",
  "Savings",
  40000,
  true
);
const rahul = new BankAccount(55566, "Rahul", "Savings", 40000, false);

const allaccounts = [sanjanaSingh, rishav, rahul];

function getTotalBalance(accounts) {
  let totalBalance = 0;
  for (const account of accounts) {
    if (account.isActive()) {
      totalBalance += account.balance;
    }
  }
  return totalBalance;
}

const total = getTotalBalance(allaccounts);

console.log(total);

// console.log(sanjanaSingh.isActive());
