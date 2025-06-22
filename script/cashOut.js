document.getElementById("cashout-btn").addEventListener("click",function(event){
    event.preventDefault();
    const pinNumber=document.getElementById("cashout-pin").value;
    const convertedPinNumber=parseInt(pinNumber);
    const cashOutAmount=document.getElementById("cashout-amount").value
    const convertedCashOut=parseFloat(cashOutAmount);
    const mainBalance=document.getElementById("main-balance").innerText
    convertedMianBalance=parseFloat(mainBalance);
    if(amount && pinNumber){
        if(convertedPinNumber===1234){
           const sub=convertedMianBalance-cashOutAmount
            const mainBalance=document.getElementById("main-balance").innerText=sub;
        }
        else{
            console.log("enter valid pin");
        }
    }
    else{
        alert("enter amount");
    }

})