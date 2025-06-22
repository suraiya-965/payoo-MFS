document.getElementById("add-money").addEventListener("click",function(event)
{
    event.preventDefault();
    const amount=document.getElementById("amount").value ;
    const convertedAmount=parseFloat(amount);
    const pinNumber=document.getElementById("password").value;
    const convertedPinNumber=parseInt(pinNumber);
    const mainBalance=document.getElementById("main-balance").innerText
    convertedMianBalance=parseFloat(mainBalance);
    if(convertedPinNumber===1234){
        const sum=convertedMianBalance+convertedAmount
            const mainBalance=document.getElementById("main-balance").innerText=sum;
    }

else{
    console.log("add hoio na");
}        
})