function personAccount() {
    let firstname = "Khoi";
    let lastname = "Pham";
    let incomes = [];
    let expenses = [];
  
    function totalIncome() {
      let total = 0;
  
      for (let i = 0; i < incomes.length; i++) {
        total += incomes[i].amount;
      }
  
      return total;
    }
  
    function totalExpense() {
      let total = 0;
  
      for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
      }
  
      return total;
    }
  
    function accountInfo() {
      console.log(`${firstname} ${lastname} has a balance of $${accountBalance()}. $${totalIncome()} in income. $${totalExpense()} in expenses.`);
    }
  
    function addIncome(description, amount) {
      incomes.push({ description, amount });
    }
  
    
    function addExpense(description, amount) {
      expenses.push({ description, amount });
    }
  
    function accountBalance() {
      return totalIncome() - totalExpense();
    }
  
    return {
      accountInfo, addIncome, addExpense, accountBalance, totalIncome, totalExpense, incomes, expenses
    };
  }
  const funcAcc = personAccount()
  funcAcc.addIncome("Job", 100)
  funcAcc.addIncome("JCode", 1000)
  
  console.log(funcAcc.totalIncome())