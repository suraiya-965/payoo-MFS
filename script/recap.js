document.getElementById("add-money").addEventListener("click",function(event){
   event.preventDefault(); 
    const pinNumber=document.getElementById("password").value;
    const convertedPinNumber=parseInt(pinNumber);
     const amount=document.getElementById("amount").value ;
    const convertedAmount=parseFloat(amount);
    const mainBalance=document.getElementById("main-balance").innerText
    convertedMianBalance=parseFloat(mainBalance);
    if(amount && pinNumber){
        if(convertedPinNumber===1234){
           const sum=convertedMianBalance+convertedAmount
            const mainBalance=document.getElementById("main-balance").innerText=sum;
        }
        else{
            console.log("enter valid pin");
        }
    }
    else{
        alert("enter amount");
    }
})