// JavaScript for Expense Tracker

document.addEventListener("DOMContentLoaded", () => {
    const balanceElement = document.querySelector(".balance h2");
    const transactionContainer = document.querySelector(".transactions");
    const earnBtn = document.getElementById("earnBtn");
    const expBtn = document.getElementById("expBtn");
  
    let balance = 0;
    let transactions = [];
  
    const updateBalance = () => {
      balanceElement.innerText = `₹${balance}`;
    };
  
    const addTransaction = (text, amount, type) => {
      const transaction = {
        text,
        amount: Number(amount),
        type,
      };
  
      transactions.push(transaction);
  
      if (type === "credit") {
        balance += transaction.amount;
      } else if (type === "debit") {
        balance -= transaction.amount;
      }
  
      updateBalance();
      renderTransactions();
    };
  
    const renderTransactions = () => {
      transactionContainer.innerHTML = "";
  
      transactions.forEach((transaction) => {
        const transactionDiv = document.createElement("div");
        transactionDiv.classList.add("transaction");
  
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("left");
  
        const textP = document.createElement("p");
        textP.innerText = transaction.text;
  
        const amountP = document.createElement("p");
        amountP.innerText = `${transaction.type === "credit" ? "+" : "-"} ₹${transaction.amount}`;
  
        leftDiv.appendChild(textP);
        leftDiv.appendChild(amountP);
  
        const statusDiv = document.createElement("div");
        statusDiv.classList.add("status");
        statusDiv.classList.add(transaction.type);
        statusDiv.innerText = transaction.type === "credit" ? "C" : "D";
  
        transactionDiv.appendChild(leftDiv);
        transactionDiv.appendChild(statusDiv);
  
        transactionContainer.appendChild(transactionDiv);
      });
    };
  
    earnBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const text = document.getElementById("text").value;
      const amount = document.getElementById("amount").value;
  
      if (text && amount) {
        addTransaction(text, amount, "credit");
        document.getElementById("text").value = "";
        document.getElementById("amount").value = "";
      }
    });
  
    expBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const text = document.getElementById("text").value;
      const amount = document.getElementById("amount").value;
  
      if (text && amount) {
        addTransaction(text, amount, "debit");
        document.getElementById("text").value = "";
        document.getElementById("amount").value = "";
      }
    });
  });
  