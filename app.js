

document.getElementById("btn").addEventListener("click", ()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if(email === "sontan@bap.com" && password === "secret"){
        location.href = "bank.html"
    }else{
        console.log("invalid input")
    }
})
