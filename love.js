window.onunload=function(){
    let button=document.getElementById("calculate");
    button.addEventListener("click",calculatelove);
}

function calculatelove(){
    let yourname=document.getElementById("your-name").value;
    let crushname=document.getElementById("crush-name").value;

    if(yourname != "" && crushname !="")
    {
        let percentage=Math.floor(Math.random() *101);
        
        str=(yourname+crushname).replace(/\s/g,"");
        if(localStorage.getItem(str)){
            percentage=localStorage.getItem(str);
        }
        else{
            localStorage.setItem(str,percentage);
        }
        document.getElementById("result-message").innerText=yourname +" and "+ crushname +"'s chance of love :";
        document.getElementById("result-percentage").innerText=percentage.toString()+"%";
    }
    else
    {
        alert("Enter Your and your crush name !");
    }
}