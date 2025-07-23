document.getElementById("add-money").addEventListener("click",function(event)
{
    event.preventDefault();
    const amount = getInputValueById("amount");
   const password=getInputValueById("password");
   const accountNumber=document.getElementById("account-num").value;
   const mainBalance=getInnerTextById("main-balance");
   const selectedBank=document.getElementById("allBank").value
   console.log(selectedBank);
   if(amount<0){
      alert("vai eita kono kotha!!positive number dite hobe")
      return;
   }
   
   if (accountNumber.length===11){
    if(password===1234){
       const sum=mainBalance+amount;
    //    document.getElementById("main-balance").innerText=sum;
       setInnerTextByIdandVale("main-balance",sum)
       const container =document.getElementById("Transaction-container");
       const div = document.createElement("div");
div.classList.add("bg-red-400");
div.innerHTML = `
  <h1 class="text-yellow-300">Added money</h1>
  <h3>${amount}</h3>
  <p>account number: ${accountNumber}</p>
`;


  
 container.appendChild(div)
   //     const p=document.createElement("p");
   //     p.innerText=` 
   //     added ${amount} from ${accountNumber} account.`
   //    console.log(p)
   //    container.appendChild(p)
   //  }
   //  else{
   //      console.log("pin thik nai");
        
   //  }  
    
   // }
   // else{
   //  console.log("account-number thik nai");
   // }
    
  


        
    
});