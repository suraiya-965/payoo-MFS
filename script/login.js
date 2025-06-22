document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    //console.log("hello");
    const accountNumber=document.getElementById("account-num").value;
    console.log(accountNumber);
    const pinNumber=document.getElementById("password").value;
    console.log(pinNumber);
    if (accountNumber.length===11){
        if(parseInt(pinNumber)===1234){
            // console.log("okay thik ache")
            window.location.href="./main.html"
        }
        else{
            alert("pin thik nai");
        }
      
    }
    else{
        alert("Please enter a valid account number");
    }
})