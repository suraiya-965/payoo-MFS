

document.getElementById("cashout").style.display="none";
document.getElementById("add-moneyBox").addEventListener("click",function(event)
{
    document.getElementById("cashout").style.display="none";
    document.getElementById("addmoney").style.display="block";

})
document.getElementById("cashout-box").addEventListener("click",function(event)
{
     document.getElementById("cashout").style.display="block";
    document.getElementById("addmoney").style.display="none";
})