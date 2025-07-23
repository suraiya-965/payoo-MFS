document.getElementById("cashout-btn").addEventListener("click",function(event){
 event.preventDefault();
 const accountNumber=document.getElementById("account-num").value;
  const amount = getInputValueById("cashout-amount");
   const password=getInputValueById("password");
   
   const mainBalance=getInnerTextById("main-balance");
   if(amount>mainBalance){
      alert("invalid amount")
      return;
   }
if (accountNumber.length===11){
    if(password===1234){
       const sub=mainBalance-amount;
    //    document.getElementById("main-balance").innerText=sum;
       setInnerTextByIdandVale("main-balance",sub)
       const container=document.getElementById("Transaction-container")
       const p=document.createElement("p");
       p.innerText=` 
       Cashout ${amount} Taka from ${accountNumber} account.`
      console.log(p)
      container.appendChild(p)
    }
    else{
        console.log("pin thik nai");
    }
    
   }
   else{
    console.log("account-number thik nai");
   }
});